import { motion } from "framer-motion";
import { Tables } from "@/types/database.types";

interface IAchievementItemProps {
    achievement: Tables<"achievements">;
    index: number;
}

function AchievementItem({ achievement, index }: IAchievementItemProps) {
    const { title, description } = achievement;

    return (
        <motion.div initial={{ opacity: 0 }} id="achievement-item" className="py-6 border-t-[1px] border-stroke-900">
            <div className="flex justify-between">
                <p className="max-sm:text-h1-semibold max-sm:font-extralight text-d2-extralight text-left">{title}</p>
                <p className="text-p2-bold">{index > 9 ? index : `0${index}`}</p>
            </div>
            <p className="text-p2-regular max-sm:text-p1-regular max-sm:font-light font-light text-para-900 mt-3">
                {description}
            </p>
        </motion.div>
    );
}

export default AchievementItem;
