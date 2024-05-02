import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import useStudentContext from "@/context/studentContext";
import { useStudentApi } from "@/api/student";
import { Tables, TablesUpdate } from "@/types/database.types";

dayjs.extend(relativeTime);

export const useReset = () => {
    const { updateStudent } = useStudentApi();

    const { setStudent } = useStudentContext();

    const handleResetOnLoad = async (student: Tables<"students">) => {
        await handleResetStreak(student);
        await handleResetChallengeAttempt(student);
    };

    const handleResetChallengeAttempt = async (student: Tables<"students">) => {
        const { last_challenge_timestamp } = student;

        const isNewDay = dayjs().isAfter(last_challenge_timestamp, "d");

        if (isNewDay) {
            const newStudent: TablesUpdate<"students"> = {
                has_failed_challenge: false,
                has_finished_challenge: false
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    const handleResetStreak = async (student: Tables<"students">) => {
        const { last_challenge_timestamp } = student;
        const difference = dayjs().diff(last_challenge_timestamp, "hour");
        if (difference >= 24) {
            const newStudent: TablesUpdate<"students"> = {
                streaks: 0
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    return {
        handleResetOnLoad,
        handleResetStreak,
        handleResetChallengeAttempt
    };
};
