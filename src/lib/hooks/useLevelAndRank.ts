import useStudentContext from "@/context/studentContext";

import { levels, ranks } from "@/lib/data/rankAndLevel";
import { Tables, TablesUpdate } from "@/types/database.types";
import { Ranks } from "../constants/rank";
import { useStudentApi } from "@/api/student";

export const useLevelAndRank = () => {
    const { setStudent, setIsRankedUp, setIsLeveledUp } = useStudentContext();
    const { updateStudent } = useStudentApi();

    const handleLeveledUp = async (student: Tables<"students">) => {
        const currentXP = student.current_xp;
        const currentLevel = student.level;
        let resultLevel = currentLevel;

        levels.forEach((level) => {
            if (currentXP >= level.xp_required) {
                resultLevel = level.level;
            }
        });

        if (resultLevel > currentLevel) {
            setIsLeveledUp(true);

            const newStudent: TablesUpdate<"students"> = {
                level: resultLevel
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    const handleRankedUp = async (student: Tables<"students">) => {
        const currentLevel = student.level;
        const currentRank = student.rank;
        let resultRank = currentRank;

        ranks.forEach((rank) => {
            if (currentLevel >= rank.level) {
                resultRank = rank.rank as Ranks;
            }
        });

        if (resultRank !== currentRank) {
            setIsRankedUp(true);

            const newStudent: TablesUpdate<"students"> = {
                rank: resultRank
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    return {
        handleLeveledUp,
        handleRankedUp
    };
};
