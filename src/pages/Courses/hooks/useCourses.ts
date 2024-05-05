import { useCoursesApi } from "@/api/courses";
import useCoursesContext from "@/context/coursesContext";
import useStudentContext from "@/context/studentContext";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";

export const useCourses = () => {
    const { getSingleCourse, getCourses, updateStudentCourse, updateCourse, insertStudentCourse } = useCoursesApi();
    const { setCourses, courses } = useCoursesContext();
    const { student } = useStudentContext();

    useEffect(() => {
        fetchCourses();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCourses = async () => {
        const courses = await getCourses();

        setCourses(courses);
    };

    const onStartCourse = async (slug: string) => {
        const course = await getSingleCourse(slug);

        if (!course) return;

        if (!student) return;

        const isAlreadyStarted = course.student_ids.includes(student.id);
        if (isAlreadyStarted) {
            const updatedStudentCourse: TablesUpdate<"student_courses"> = {
                last_accessed_at: new Date().toISOString()
            };

            const updateStudentCourseResponse = await updateStudentCourse(slug, student.id, updatedStudentCourse);

            if (!updateStudentCourseResponse) {
                throw new Error("Error while updating course");
            }

            return;
        }

        await insertStudentCourse(slug, student.id);

        const updatedCourse: TablesUpdate<"courses"> = {
            student_ids: [...course.student_ids, student.id]
        };

        const updateCourseResponse = await updateCourse(slug, updatedCourse);

        if (!updateCourseResponse) {
            throw new Error("Error while updating course");
        }
    };

    return {
        courses,
        onStartCourse
    };
};
