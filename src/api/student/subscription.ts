import useStudentContext from "@/context/studentContext";
import supabase from "@/lib/supabaseClient";
import { Tables } from "@/types/database.types";
import { useEffect } from "react";

type Student = Tables<"students">;

export const useUpdateStudentSubscription = () => {
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
                    setStudent({ ...(payload.new as Student) });
                }
            )
            .subscribe();

        return () => {
            studentSubscription.unsubscribe();
        };
    });
};
