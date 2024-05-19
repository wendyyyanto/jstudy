import AchievementItem from "./components/AchievementItem";
import { useEffect, useState } from "react";
import useStudentContext from "@/context/studentContext";
import { Tables } from "@/types/database.types";
import { useAchievementApi } from "@/api/achievement";
import { useUpdateStudentSubscription } from "@/api/student/subscription";
import { stagger, useAnimate } from "framer-motion";

function AchievementsPage() {
    useUpdateStudentSubscription();

    const [scope, animate] = useAnimate();
    const [achievementsList, setAchievementsList] = useState<Tables<"achievements">[]>([]);
    const { student } = useStudentContext();
    const { getStudentAchievements } = useAchievementApi();

    useEffect(() => {
        animate(
            "div#achievement-item",
            {
                opacity: 1
            },
            {
                bounce: 0,
                type: "spring",
                duration: 0.25,
                delay: stagger(0.1)
            }
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [achievementsList]);

    useEffect(() => {
        if (student) {
            fetchStudentAchievements(student);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student]);

    const fetchStudentAchievements = async (student: Tables<"students">) => {
        const studentAchievements = await getStudentAchievements(student.achievements);

        setAchievementsList(studentAchievements);
    };

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-10">Achievements</h1>

            <div ref={scope} className="h-[75%] flex flex-col gap-8 pr-10 overflow-auto">
                {achievementsList.length > 0 ? (
                    achievementsList.map((achievement, index) => (
                        <AchievementItem achievement={achievement!} index={index + 1} key={achievement?.id} />
                    ))
                ) : (
                    <div id="achievement-item" className="h-screen flex flex-1 justify-center items-center">
                        <p>Belum Memiliki Achievements</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default AchievementsPage;
