import AchievementItem from "./AchievementItem";

function Achievements() {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Achievements</p>
            <div className="flex flex-col my-5">
                <AchievementItem number="01" title="Hello, World" />
            </div>
        </div>
    );
}

export default Achievements;
