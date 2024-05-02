import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";
import useAuth from "@/lib/hooks/useAuth";
import supabase from "@/lib/supabaseClient";
import useStudentContext from "@/context/studentContext";
import { Tables, TablesUpdate } from "@/types/database.types";
import { useStudentApi } from "@/api/student";
import AchievementModal from "./Achievements/components/AchievementModal";
import useAchievementContext from "@/context/achievementContext";

type Achievements = Tables<"achievements">;
type Students = Tables<"students"> | null;

type Achievement = {
    [key: string]: number | string;
};

function Dashboard() {
    const location = useLocation();
    const { handleDashboardAuth } = useAuth();

    const { student } = useStudentContext();
    const { achievementModalShown, setAchievementModalShown, achievement, setAchievement } = useAchievementContext();

    const { updateStudent } = useStudentApi();

    useEffect(() => {
        handleDashboardAuth();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!student) return;

        handleReceiveAchievement();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    const handleReceiveAchievement = async () => {
        const { data: studentAchievements, error } = await supabase.from("achievements").select("*");

        if (error) {
            throw new Error(error.message);
        }

        studentAchievements.forEach(async (achievement) => {
            const isDeserved = checkDeservedAchievement(achievement);
            const isAlreadyReceived = isAchievementAlreadyReceived(achievement, student);

            if (isDeserved && !isAlreadyReceived) {
                const newStudent: TablesUpdate<"students"> = {
                    achievements: [...student!.achievements, achievement.id],
                    points: student!.points + achievement.reward_points,
                    current_xp: student!.current_xp + achievement.reward_xp
                };

                setAchievement(achievement);
                setAchievementModalShown(true);

                await updateStudent(student!.id, newStudent);
            }
        });
    };

    const isAchievementAlreadyReceived = (achievement: Achievements, student: Students) => {
        const studentAchievements = student?.achievements;

        return studentAchievements?.includes(achievement!.id);
    };

    const checkDeservedAchievement = (achievement: Achievements) => {
        const keys = Object.keys(achievement?.requirements as Achievement);

        let isDeserved = true;

        keys.forEach((key) => {
            const studentValue = student?.[key];
            const requirement = achievement.requirements?.[key];

            if (studentValue !== requirement) {
                isDeserved = false;
                return;
            }
        });

        return isDeserved;
    };

    return (
        <div className="flex">
            <DashboardSideBar />
            <div className="w-screen h-screen px-[60px] py-[50px] pt-0 overflow-hidden">
                <DashboardNavBar />
                <Outlet />
                {achievementModalShown && achievement ? <AchievementModal achievement={achievement} /> : null}
            </div>
        </div>
    );
}

export default Dashboard;
