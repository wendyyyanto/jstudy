import { FiCheckSquare } from "react-icons/fi";

interface ICourseCompletedItemProps {
    title: string;
    completedAt: string;
}

function CourseCompletedItem({ title, completedAt }: ICourseCompletedItemProps) {
    return (
        <div className="h-24 flex flex-col rounded-sm border border-stroke-100 py-4 px-6">
            <p className="text-p2-semibold">{title}</p>

            <div className="flex flex-1 items-end text-tertiary-700 gap-2">
                <FiCheckSquare size={18} />
                <p className="text-p1-regular">Completed {completedAt}</p>
            </div>
        </div>
    );
}

export default CourseCompletedItem;
