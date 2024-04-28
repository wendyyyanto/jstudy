import supabase from "@/lib/supabaseClient";
import { TablesUpdate } from "@/types/database.types";

export const useStudent = () => {
    const getStudent = async (studentId: number) => {
        const { data: student, error } = await supabase.from("students").select("*").eq("id", studentId).single();

        if (error) {
            throw new Error(error.message);
        }

        return student;
    };

    return { getStudent };
};

export const useUpdateStudent = () => {
    const updateStudent = async (studentId: number, updatedFields: TablesUpdate<"students">) => {
        const { data: updatedStudent, error } = await supabase
            .from("students")
            .update(updatedFields)
            .eq("id", studentId)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return updatedStudent;
    };

    return { updateStudent };
};
