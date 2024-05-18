import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Tables } from "@/types/database.types";
import { HiArrowRight } from "react-icons/hi";
import { LuTerminal } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface ILastModuleInfoProps {
    course: Tables<"student_courses"> | null;
}

dayjs.extend(relativeTime);

function LastModuleInfo({ course }: ILastModuleInfoProps) {
    return (
        <>
            <div className="flex gap-2 items-center">
                <LuTerminal size={22} />
                <p className="text-p1-regular text-stroke-300">Modul yang baru saja kamu akses</p>
            </div>

            {course ? (
                <>
                    <p className="text-h5-semibold text-stroke-800 mt-5 w-10/12 text-ellipsis whitespace-nowrap overflow-hidden">
                        {course.course_title}
                    </p>
                    <p className="text-p1-regular text-stroke-300 mt-2">
                        Last accessed {dayjs(course.last_accessed_at).fromNow()}
                    </p>

                    <NavLink
                        to={`/courses/${course.course_slug}/modules/${course.last_module}`}
                        className="flex justify-end gap-2 items-center underline text-p2-regular text-stroke-800 mt-8"
                    >
                        Lanjutin <HiArrowRight size={18} />
                    </NavLink>
                </>
            ) : (
                <div className="flex flex-1 justify-center items-center">
                    <p className="text-p2-semibold text-stroke-300">Tidak ada</p>
                </div>
            )}
        </>
    );
}

export default LastModuleInfo;
