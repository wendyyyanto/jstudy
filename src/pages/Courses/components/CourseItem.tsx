import Button from "@/components/Button";

interface ICourseItemProps {
    title: string;
    description: string;
    icon: string;
    level: string;
}

function CourseItem({ title, description, icon, level }: ICourseItemProps) {
    return (
        <div className="h-64 flex flex-col rounded-sm border border-stroke-100 py-6 px-8">
            <p className="text-h5-semibold">{title}</p>
            <p className="text-p1-regular mt-4 text-para-300">{description}</p>

            <div className="flex flex-1 items-end justify-between">
                <div className="flex gap-2">
                    <img className="h-4" src={icon} alt="Level Icon" />
                    <p className="text-p1-regular text-para-200">{level}</p>
                </div>
                <Button
                    text="Start Learning"
                    width="auto"
                    height="auto"
                    classes="bg-highlight-300 text-p1-semibold py-3 px-4"
                />
            </div>
        </div>
    );
}

export default CourseItem;
