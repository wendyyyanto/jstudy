import supabase from "@/lib/supabaseClient";
import { TablesUpdate } from "@/types/database.types";

export const useStudentApi = () => {
    const getStudent = async (userId: string) => {
        const { data: student, error } = await supabase
            .from("students")
            .select("*")
            .eq("user_id", userId)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return student;
    };

    const getStudents = async () => {
        const { data: students, error } = await supabase.from("students").select("*");

        if (error) {
            throw new Error(error.message);
        }

        return students;
    };

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

    return { getStudent, getStudents, updateStudent };
};
