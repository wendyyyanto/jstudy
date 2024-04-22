interface IAchievementItemProps {
    title: string;
    number: number;
    description: string;
}

function AchievementItem({ title, number, description }: IAchievementItemProps) {
    return (
        <div className="py-6 border-t-[1px] border-stroke-900">
            <div className="flex justify-between">
                <p className="text-d2-extralight text-left">{title}</p>
                <p className="text-p2-bold">{number > 9 ? number : `0${number}`}</p>
            </div>
            <p className="text-p2-regular font-light text-para-900 mt-3">{description}</p>
        </div>
    );
}

export default AchievementItem;
