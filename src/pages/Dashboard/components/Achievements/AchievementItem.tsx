import SmallCircle from "../SmallCircle";

interface IAchievementItemProps {
    number: string;
    title: string;
}

function AchievementItem({ number, title }: IAchievementItemProps) {
    return (
        <div className="flex items-center gap-5">
            <SmallCircle color="light">
                <span>{number}</span>
            </SmallCircle>
            <p className="text-subheading-regular">{title}</p>
        </div>
    );
}

export default AchievementItem;
