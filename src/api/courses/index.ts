import supabase from "@/lib/supabaseClient";
import { TablesUpdate } from "@/types/database.types";

export const useCoursesApi = () => {
    const getCourses = async () => {
        const { data: courses, error } = await supabase.from("courses").select("*");

        if (error) {
            throw new Error(error.message);
        }

        return courses;
    };

    const getSingleCourse = async (slug: string) => {
        const { data: course, error } = await supabase.from("courses").select("*").eq("slug", slug).select().single();

        if (error) {
            throw new Error(error.message);
        }

        return course;
    };

    const getCourseModules = async (slug: string) => {
        const { data: modules, error } = await supabase.from("course_modules").select("*").eq("course_slug", slug);

        if (error) {
            throw new Error(error.message);
        }

        return modules;
    };

    const getStudentCourse = async (slug: string, studentId: number) => {
        const { data: studentCourse, error } = await supabase
            .from("student_courses")
            .select("*")
            .match({ course_slug: slug, student_id: studentId })
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return studentCourse;
    };

    const insertStudentCourse = async (slug: string, studentId: number) => {
        const { error } = await supabase
            .from("student_courses")
            .upsert({
                course_slug: slug,
                student_id: studentId
            })
            .select();

        if (error) {
            throw new Error(error.message);
        }
    };

    const updateCourse = async (slug: string, updatedField: TablesUpdate<"courses">) => {
        const { data: course, error } = await supabase
            .from("courses")
            .update(updatedField)
            .eq("slug", slug)
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return course;
    };

    const updateStudentCourse = async (
        slug: string,
        studentId: number,
        updatedField: TablesUpdate<"student_courses">
    ) => {
        const { data: course, error } = await supabase
            .from("student_courses")
            .update(updatedField)
            .match({ course_slug: slug, student_id: studentId })
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return course;
    };

    return {
        getSingleCourse,
        insertStudentCourse,
        getCourses,
        updateCourse,
        updateStudentCourse,
        getCourseModules,
        getStudentCourse
    };
};