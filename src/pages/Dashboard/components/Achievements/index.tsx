import { Tables } from "@/types/database.types";
import AchievementItem from "./AchievementItem";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

function Achievements({ achievements }: { achievements: Tables<"achievements">[] }) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "div#dash-achievements",
            {
                opacity: 1
            },
            {
                type: "spring",
                bounce: 0,
                delay: stagger(0.1, { startDelay: 0.8 })
            }
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Achievements</p>
            <div ref={scope} className="flex flex-col gap-6 my-5">
                {achievements.map((achievement, index) => (
                    <AchievementItem key={achievement.id} title={achievement.title} number={index + 1} />
                ))}
            </div>
        </div>
    );
}

export default Achievements;
