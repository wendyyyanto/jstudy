import supabase from "@/lib/supabaseClient";
import { TablesUpdate } from "@/types/database.types";

export const useChallengeApi = () => {
    const getChallenge = async (challengeId: number) => {
        const { data: challenge, error } = await supabase.from("challenges").select().eq("id", challengeId).single();

        if (error) {
            throw new Error(error.message);
        }

        return challenge;
    };

    const getRandomChallenge = async (studentId: number) => {
        const { data: challenge, error } = await supabase
            .from("challenges")
            .select()
            .not("user_ids", "cs", `{${studentId}}`);

        if (error) {
            throw new Error(error.message);
        }

        const random = Math.round(Math.random() * (challenge.length - 1));
        return challenge[random];
    };

    const updateChallenge = async (challengeId: number, updatedFields: TablesUpdate<"challenges">) => {
        const { data: updatedChallenge, error } = await supabase
            .from("challenges")
            .update(updatedFields)
            .eq("id", challengeId)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return updatedChallenge;
    };

    return { getChallenge, getRandomChallenge, updateChallenge };
};
