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
        const { data: modules, error } = await supabase
            .from("course_modules")
            .select("*")
            .eq("course_slug", slug)
            .order("id", { ascending: true });

        if (error) {
            throw new Error(error.message);
        }

        return modules;
    };

    const getLastModuleRef = async (slug: string, studentId: number) => {
        const { data: module, error } = await supabase
            .from("student_courses")
            .select(`last_module, course_modules(*)`)
            .match({
                course_slug: slug,
                student_id: studentId
            })
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return module;
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

    const getStudentCourses = async (studentId: number) => {
        const { data: studentCourses, error } = await supabase.from("student_courses").select("*").match({
            student_id: studentId,
            status: "Incomplete"
        });

        if (error) {
            throw new Error(error.message);
        }

        return studentCourses;
    };

    const getCompletedCourses = async (studentId: number) => {
        const { data: completedCourses, error } = await supabase.from("student_courses").select("*").match({
            student_id: studentId,
            status: "Completed"
        });

        if (error) {
            throw new Error(error.message);
        }

        return completedCourses;
    };

    const getLatestAccessedCourse = async (studentId: number) => {
        const { data: lastAccessedCourse, error } = await supabase
            .from("student_courses")
            .select("*")
            .match({
                student_id: studentId,
                status: "Incomplete"
            })
            .order("last_accessed_at", { ascending: true })
            .select()
            .single();

        if (error) {
            throw new Error(error.message);
        }

        return lastAccessedCourse;
    };

    const insertStudentCourse = async (slug: string, studentId: number, title: string) => {
        const { error } = await supabase
            .from("student_courses")
            .insert({
                course_slug: slug,
                student_id: studentId,
                course_title: title
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
        getCourses,
        getSingleCourse,
        getStudentCourse,
        getStudentCourses,
        getCourseModules,
        getCompletedCourses,
        getLatestAccessedCourse,
        getLastModuleRef,
        insertStudentCourse,
        updateCourse,
        updateStudentCourse
    };
};
