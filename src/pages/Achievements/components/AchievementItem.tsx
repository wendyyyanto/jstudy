import { Tables } from "@/types/database.types";

interface IAchievementItemProps {
    achievement: Tables<"achievements">;
    index: number;
}

function AchievementItem({ achievement, index }: IAchievementItemProps) {
    const { title, description } = achievement;

    return (
        <div className="py-6 border-t-[1px] border-stroke-900">
            <div className="flex justify-between">
                <p className="text-d2-extralight text-left">{title}</p>
                <p className="text-p2-bold">{index > 9 ? index : `0${index}`}</p>
            </div>
            <p className="text-p2-regular font-light text-para-900 mt-3">{description}</p>
        </div>
    );
}

export default AchievementItem;
