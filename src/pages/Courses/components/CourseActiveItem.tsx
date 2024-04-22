import ProgressBar from "@/components/ProgressBar/ProgressBar";

interface ICourseActiveItemProps {
    title: string;
    courseAddress: string;
}

function CourseActiveItem({ title, courseAddress }: ICourseActiveItemProps) {
    return (
        <div className="min-h-36 flex flex-col rounded-sm border border-stroke-100 py-4 px-6">
            <div className="flex justify-between flex-1">
                <p className="text-p2-semibold">{title}</p>
                <a href={courseAddress} className="text-wrap w-min text-p1-regular text-tertiary-800">
                    See Course
                </a>
            </div>
            <ProgressBar progress={90} />
        </div>
    );
}

export default CourseActiveItem;
