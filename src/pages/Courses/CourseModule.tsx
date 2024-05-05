import { NavLink } from "react-router-dom";
import parse from "html-react-parser";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useCourseModule } from "./hooks/useCourseModule";
import { useUpdateStudentSubscription } from "@/api/student/subscription";

function CourseModule() {
    useUpdateStudentSubscription();

    const { currentModule: module, courseModules: modules, onFinishCourse } = useCourseModule();

    if (!modules) {
        return <div>Loading modules...</div>;
    }

    const totalModules = modules.length;

    if (!module) {
        return <div>Loading module...</div>;
    }

    const parsedHTML = parse(module.content);
    const currentIndex = modules.findIndex((m) => m?.id === module.id);

    return (
        <div className="h-screen w-screen overflow-hidden relative">
            <NavLink to="/dashboard/courses" className="flex bg-highlight-100 items-center px-8 py-6 w-screen gap-2">
                <FaArrowLeft size={18} />
                <p className="text-p2-semibold">{module.title}</p>
            </NavLink>
            <div className="h-screen w-2/5 mx-auto overflow-auto">
                <div className="pt-16 pb-52">{parsedHTML}</div>
            </div>
            <div className="flex bg-highlight-100 justify-between items-center px-8 py-6 w-screen gap-2 absolute bottom-0 left-0">
                {module.prev_module ? (
                    <NavLink to={module.prev_module} className="flex items-center gap-2 cursor-pointer">
                        <p className="text-p2-semibold">Prev Module</p>
                        <FaArrowLeft size={18} />
                    </NavLink>
                ) : (
                    <div></div>
                )}

                <div>
                    <p className="text-p2-semibold">
                        Module {currentIndex + 1} of {totalModules}
                    </p>
                </div>

                {module.next_module ? (
                    <NavLink to={module.next_module} className="flex items-center gap-2 cursor-pointer">
                        <p className="text-p2-semibold">Next Module</p>
                        <FaArrowRight size={18} />
                    </NavLink>
                ) : (
                    <div onClick={() => onFinishCourse()} className="flex items-center gap-2 cursor-pointer">
                        <p className="text-p2-semibold">Finish</p>
                        <FaArrowRight size={18} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseModule;
