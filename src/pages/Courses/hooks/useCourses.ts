import { useCoursesApi } from "@/api/courses";
import useCoursesContext from "@/context/coursesContext";
import useStudentContext from "@/context/studentContext";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCourses = () => {
    const navigate = useNavigate();

    const {
        getSingleCourse,
        getCourses,
        getCompletedCourses,
        getStudentCourses,
        updateStudentCourse,
        updateCourse,
        insertStudentCourse
    } = useCoursesApi();
    const {
        setCourses,
        courses,
        setCompletedStudentCourses,
        completedStudentCourses,
        setStudentCourses,
        studentCourses
    } = useCoursesContext();
    const { student } = useStudentContext();

    useEffect(() => {
        fetchCourses();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchCourses = async () => {
        if (!student) return;

        const coursesList = await getCourses();
        const completedCoursesList = await getCompletedCourses(student.id);
        const studentCoursesList = await getStudentCourses(student.id);

        setCourses(coursesList);
        setCompletedStudentCourses(completedCoursesList);
        setStudentCourses(studentCoursesList);
    };

    const onStartCourse = async (slug: string) => {
        const course = await getSingleCourse(slug);

        if (!course || !student) return;

        const isAlreadyStarted = course.student_ids.includes(student.id);
        if (isAlreadyStarted) {
            continueCourse(course.slug, student.id);
            return;
        }

        await insertStudentCourse(slug, student.id, course.title);

        const updatedCourse: TablesUpdate<"courses"> = {
            student_ids: [...course.student_ids, student.id]
        };

        await updateCourse(slug, updatedCourse);

        navigate(course.start_address);
    };

    const continueCourse = async (slug: string, studentId: number) => {
        const updatedStudentCourse: TablesUpdate<"student_courses"> = {
            last_accessed_at: new Date().toISOString()
        };

        await updateStudentCourse(slug, studentId, updatedStudentCourse);
    };

    return {
        courses,
        onStartCourse,
        completedStudentCourses,
        studentCourses
    };
};
