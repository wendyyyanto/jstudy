import { Tables } from "@/types/database.types";
import AchievementItem from "./AchievementItem";

function Achievements({ achievements }: { achievements: Tables<"achievements">[] }) {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Achievements</p>
            <div className="flex flex-col gap-6 my-5">
                {achievements.map((achievement, index) => (
                    <AchievementItem key={achievement.id} title={achievement.title} number={index + 1} />
                ))}
            </div>
        </div>
    );
}

export default Achievements;
