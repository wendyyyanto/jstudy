import supabase from "@/lib/supabaseClient";

export const useAchievementApi = () => {
    const getAchievements = async () => {
        const { data: achievements, error } = await supabase.from("achievements").select("*");

        if (error) {
            throw new Error(error.message);
        }

        return achievements;
    };

    const getStudentAchievements = async (achievements: number[]) => {
        const { data: studentAchievements, error } = await supabase
            .from("achievements")
            .select()
            .in("id", achievements);

        if (error) {
            throw new Error(error.message);
        }

        return studentAchievements;
    };

    return { getAchievements, getStudentAchievements };
};
