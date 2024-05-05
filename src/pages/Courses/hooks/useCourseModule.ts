import { useCoursesApi } from "@/api/courses";
import useCoursesContext from "@/context/coursesContext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const useCourseModule = () => {
    const { getCourseModules } = useCoursesApi();
    const { setCourseModules, courseModules, currentModule, setCurrentModule } = useCoursesContext();

    const { courseSlug, moduleId } = useParams();

    useEffect(() => {
        fetchModules();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchModules = async () => {
        const modules = await getCourseModules(courseSlug as string);
        const currentModuleIndex = modules.findIndex((module) => module.id === moduleId);

        setCurrentModule(modules[currentModuleIndex]);
        setCourseModules(modules);
    };

    return {
        currentModule,
        courseModules
    };
};
