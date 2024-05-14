import { NavLink } from "react-router-dom";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useCourseModule } from "./hooks/useCourseModule";
import { useUpdateStudentSubscription } from "@/api/student/subscription";
import { Code, CopyBlock, dracula } from "react-code-blocks";

function CourseModule() {
    useUpdateStudentSubscription();

    const { currentModule: module, courseModules: modules, onFinishCourse, onNextModule } = useCourseModule();

    if (!modules) {
        return <div>Loading modules...</div>;
    }

    const totalModules = modules.length;

    if (!module) {
        return <div>Loading module...</div>;
    }

    const options: HTMLReactParserOptions = {
        replace(domNode, index) {
            if ((domNode as Element).attribs) {
                const { attribs, children } = domNode as Element;

                if (attribs.id === "codeblock") {
                    return (
                        <CopyBlock
                            key={index}
                            text={attribs.text}
                            theme={dracula}
                            language="javascript"
                            showLineNumbers
                        />
                    );
                }

                if (attribs.id === "code") {
                    return <Code key={index} text={attribs.text} language="javascript" theme={dracula} />;
                }

                if (attribs.id === "shortcode") {
                    return <ShortCode code={children[0].data} />;
                }
            }

            return domNode;
        }
    };

    const html = `
    
    `;

    const parsedHTML = parse(module.content, options);
    const currentIndex = modules.findIndex((m) => m?.id === module.id);

    return (
        <div className="h-screen w-screen overflow-hidden relative">
            <NavLink to="/dashboard/courses" className="flex bg-highlight-100 items-center px-8 py-6 w-screen gap-2">
                <FaArrowLeft size={18} />
                <p className="text-p2-semibold">{module.title}</p>
            </NavLink>
            <div className="h-screen w-2/5 mx-auto overflow-auto">
                <div className="pt-16 pb-52">{parsedHTML}</div>
                {/* <div className="pt-16 pb-52"></div> */}
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
                    <div onClick={() => onNextModule()} className="flex items-center gap-2 cursor-pointer">
                        <p className="text-p2-semibold">Next Module</p>
                        <FaArrowRight size={18} />
                    </div>
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

function ShortCode({ code }: { code: string }) {
    return <span className="text-[#ff0000]">{code}</span>;
}

export default CourseModule;
