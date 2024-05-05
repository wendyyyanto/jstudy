import { useCoursesApi } from "@/api/courses";
import useCoursesContext from "@/context/coursesContext";
import useStudentContext from "@/context/studentContext";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";

export const useCourses = () => {
    const { getSingleCourse, getCourses, upsertStudentCourse, updateCourse } = useCoursesApi();
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

        const updatedCourse: TablesUpdate<"courses"> = {
            student_ids: [...course.student_ids, student.id]
        };

        await upsertStudentCourse(course.slug, student.id);

        const isAlreadyStarted = course.student_ids.includes(student.id);

        if (isAlreadyStarted) return;

        const response = await updateCourse(slug, updatedCourse);

        if (!response) {
            throw new Error("Error while updating course");
        }
    };

    return {
        courses,
        onStartCourse
    };
};
