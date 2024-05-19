import { motion } from "framer-motion";
import SmallCircle from "../SmallCircle";

interface IAchievementItemProps {
    number: number;
    title: string;
}

function AchievementItem({ number, title }: IAchievementItemProps) {
    return (
        <motion.div initial={{ opacity: 0 }} id="dash-achievements" className="flex items-center gap-5">
            <SmallCircle color="light">
                <span>{number > 9 ? number : `0${number}`}</span>
            </SmallCircle>
            <p className="text-subheading-regular">{title}</p>
        </motion.div>
    );
}

export default AchievementItem;
