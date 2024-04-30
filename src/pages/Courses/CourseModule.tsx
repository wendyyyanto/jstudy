import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function CourseModule() {
    const params = useParams();

    const htmlString = `<p>
                            <span className="text-d2-semibold">INTRODUCTION TO JAVASCRIPT</span> </br>
                            so this is the introduction blablablablabla
                        </p>`;
    const parsedHTML = parse(htmlString);

    useEffect(() => {
        console.log(params);
    }, [params]);

    return (
        <div className="h-screen w-screen overflow-hidden relative">
            <NavLink to="/dashboard/courses" className="flex bg-highlight-100 items-center px-8 py-6 w-screen gap-2">
                <FaArrowLeft size={18} />
                <p className="text-p2-semibold">Introduction to JavaScript</p>
            </NavLink>
            <div className="h-screen w-1/2 mx-auto overflow-auto">
                <div className="pt-16 pb-52">{parsedHTML}</div>
            </div>
            <div className="flex bg-highlight-100 justify-between items-center px-8 py-6 w-screen gap-2 absolute bottom-0 left-0">
                <div></div>
                <div>
                    <p className="text-p2-semibold">Module 1 of 15</p>
                </div>
                <NavLink to={""} className="flex items-center gap-2">
                    <p className="text-p2-semibold">Next Module</p>
                    <FaArrowRight size={18} />
                </NavLink>
            </div>
        </div>
    );
}

export default CourseModule;
