import { useCoursesApi } from "@/api/courses";
import { useStudentApi } from "@/api/student";
import useCoursesContext from "@/context/coursesContext";
import useStudentContext from "@/context/studentContext";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const useCourseModule = () => {
    const navigate = useNavigate();

    const { updateStudent } = useStudentApi();
    const { getCourseModules, getStudentCourse, updateStudentCourse } = useCoursesApi();

    const { setCourseModules, courseModules, currentModule, setCurrentModule, setStudentCourse, studentCourse } =
        useCoursesContext();
    const { student } = useStudentContext();

    const { courseSlug, moduleId } = useParams();

    useEffect(() => {
        fetchModules();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchModules = async () => {
        if (!student) return;

        const slug = courseSlug as string;

        const modules = await getCourseModules(slug);
        const course = await getStudentCourse(slug, student.id);
        const currentModuleIndex = modules.findIndex((module) => module.id === moduleId);

        setCurrentModule(modules[currentModuleIndex]);
        setCourseModules(modules);
        setStudentCourse(course);
    };

    const onFinishCourse = async () => {
        if (!student) return;

        if (!studentCourse) return;

        if (studentCourse.status === "Completed") {
            navigate("/dashboard/courses");
            return;
        }

        const slug = courseSlug as string;

        if (student.completed_courses.includes(slug)) return;

        const updatedStudent: TablesUpdate<"students"> = {
            completed_courses: [...student.completed_courses, slug]
        };

        const updatedStudentCourse: TablesUpdate<"student_courses"> = {
            status: "Completed",
            progress: 100,
            completed_at: new Date().toISOString()
        };

        await updateStudent(student.id, updatedStudent);
        await updateStudentCourse(slug, student.id, updatedStudentCourse);

        navigate("/dashboard/courses");
    };

    return {
        currentModule,
        courseModules,
        onFinishCourse
    };
};
