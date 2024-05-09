import { useEffect } from "react";
import { useLevelAndRank } from "@/lib/hooks/useLevelAndRank";
import supabase from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";

type Student = Tables<"students">;

export const useUpdateStudentSubscription = () => {
    const { handleLeveledUp, handleRankedUp } = useLevelAndRank();

    useEffect(() => {
        const studentSubscription = supabase
            .channel("custom-update-channel")
            .on(
                "postgres_changes",
                {
                    event: "UPDATE",
                    schema: "public",
                    table: "students"
                },
                (payload) => {
                    handleRankedUp(payload.new as Student);
                    handleLeveledUp(payload.new as Student);
                }
            )
            .subscribe();

        return () => {
            studentSubscription.unsubscribe();
        };
    });
};
