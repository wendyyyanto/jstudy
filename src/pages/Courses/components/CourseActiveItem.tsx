import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { FaArrowRight } from "react-icons/fa";

interface ICourseActiveItemProps {
    title: string;
    courseAddress: string;
}

function CourseActiveItem({ title, courseAddress }: ICourseActiveItemProps) {
    return (
        <div className="min-h-36 flex flex-col rounded-sm border border-stroke-100 py-4 px-6">
            <div className="flex justify-between gap-2 flex-1">
                <p className="text-p2-semibold">{title}</p>
                <a
                    href={courseAddress}
                    className="flex w-2/5 justify-end gap-2 text-wrap text-p1-regular text-tertiary-800 underline"
                >
                    Buka Materi <FaArrowRight size={14} color="#668080" />
                </a>
            </div>
            <ProgressBar progress={90} />
        </div>
    );
}

export default CourseActiveItem;
