import { useEffect } from "react";
import { useLevelAndRank } from "@/lib/hooks/useLevelAndRank";
import supabase from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";
import useStudentContext from "@/context/studentContext";

type Student = Tables<"students">;

export const useUpdateStudentSubscription = () => {
    const { handleLeveledUp, handleRankedUp } = useLevelAndRank();
    const { setStudent } = useStudentContext();

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

                    setStudent(payload.new as Student);
                }
            )
            .subscribe();

        return () => {
            studentSubscription.unsubscribe();
        };
    });
};
