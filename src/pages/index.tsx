import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";
import useAuth from "@/lib/hooks/useAuth";
import supabase from "@/lib/supabaseClient";
import useStudentContext from "@/context/studentContext";
import { Tables, TablesUpdate } from "@/types/database.types";
import { useStudentApi } from "@/api/student";
import useAchievementContext from "@/context/achievementContext";
import Announcement from "@/components/Announcement";

type Achievements = Tables<"achievements">;
type Students = Tables<"students"> | null;

type Requirement = {
    [key: string]: number | string;
};

function Dashboard() {
    const location = useLocation();
    const { handleDashboardAuth } = useAuth();

    const { student, isLeveledUp, isRankedUp, setIsLeveledUp, setIsRankedUp } = useStudentContext();
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
            const isDeserved = isMatchRequirements(achievement);
            const isAlreadyReceived = isAchievementAlreadyReceived(achievement, student);

            if (isDeserved && !isAlreadyReceived) {
                const newStudent: TablesUpdate<"students"> = {
                    achievements: [...student!.achievements, achievement.id],
                    points: student!.points + achievement.reward_points,
                    current_xp: student!.current_xp + achievement.reward_xp
                };

                await updateStudent(student!.id, newStudent);

                setAchievement(achievement);
                setAchievementModalShown(true);
            }
        });
    };

    const isAchievementAlreadyReceived = (achievement: Achievements, student: Students) => {
        const studentAchievements = student?.achievements;

        return studentAchievements?.includes(achievement!.id);
    };

    const isMatchRequirements = (achievement: Achievements) => {
        if (!achievement) return false;
        if (!student) return false;

        const keys = Object.keys(achievement.requirements as Requirement);
        const requirementsString = JSON.stringify(achievement.requirements);
        const requirementObj = JSON.parse(requirementsString);

        let isDeserved = true;

        keys.forEach((key) => {
            const studentValue = student[key];
            const requirement = requirementObj[key];
            const isIncluded = typeof studentValue === "object" ? studentValue.includes(requirement) : false;

            if (isIncluded) {
                isDeserved = true;
                return;
            }

            if (studentValue !== requirement) {
                isDeserved = false;
                return;
            }
        });

        return isDeserved;
    };

    if (!student) {
        return <p>Loading student's data</p>;
    }

    return (
        <div className="flex">
            <DashboardSideBar />
            <div className="w-screen h-screen px-[60px]">
                <div className="overflow-auto w-full h-full pb-4">
                    <DashboardNavBar />
                    <Outlet />
                </div>
                {achievementModalShown && (
                    <Announcement
                        headerTitle="Achievement Unlocked 🎉"
                        message="Congrats, You received a new achievement!"
                        detail={`Achievement :  ${achievement?.title}`}
                        onClose={() => setAchievementModalShown(false)}
                    />
                )}

                {isLeveledUp && (
                    <Announcement
                        headerTitle="Leveled Up!"
                        message="Congratulations on upgrading your knowledge"
                        detail={`Current Level :  ${student.level}`}
                        onClose={() => setIsLeveledUp(false)}
                    />
                )}

                {isRankedUp && (
                    <Announcement
                        headerTitle="New Rank Achieved!"
                        message="Congratulations on your new rank. Keep it up!"
                        detail={`Current Rank :  ${student.rank}`}
                        onClose={() => setIsRankedUp(false)}
                    />
                )}
            </div>
        </div>
    );
}

export default Dashboard;
