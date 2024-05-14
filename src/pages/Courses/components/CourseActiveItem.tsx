import { useCoursesApi } from "@/api/courses";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { Tables } from "@/types/database.types";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface ICourseActiveItemProps {
    title: string;
    course: Tables<"student_courses">;
}

function CourseActiveItem({ title, course }: ICourseActiveItemProps) {
    const [lastModule, setLastModule] = useState<Tables<"course_modules"> | null>(null);

    const { getLastModuleRef } = useCoursesApi();

    useEffect(() => {
        fetchLastModule();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchLastModule = async () => {
        const lastModuleRef = await getLastModuleRef(course.course_slug, course.student_id);

        setLastModule(lastModuleRef.course_modules);
    };

    if (!lastModule) return;

    return (
        <div className="min-h-36 flex flex-col rounded-sm border border-stroke-100 py-4 px-6">
            <div className="flex justify-between gap-2 flex-1">
                <p className="text-p2-semibold">{title}</p>
                <NavLink
                    to={lastModule.address}
                    className="flex w-2/5 justify-end gap-2 text-wrap text-p1-regular text-tertiary-800 underline"
                >
                    Buka Materi <FaArrowRight size={14} color="#668080" />
                </NavLink>
            </div>
            <ProgressBar progress={90} />
        </div>
    );
}

export default CourseActiveItem;
