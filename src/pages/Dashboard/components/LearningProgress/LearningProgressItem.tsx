import { motion } from "framer-motion";

import ProgressBar from "@/components/ProgressBar/ProgressBar";

interface ILearningProgressItemProps {
    courseName: string;
    progress: number;
    startedAt: string;
}

function LearningProgressItem({ courseName, progress, startedAt }: ILearningProgressItemProps) {
    return (
        <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            className="flex flex-col h-28 rounded-sm border border-stroke-300 p-4"
        >
            <p className="text-p2-semibold w-11/12 overflow-hidden text-nowrap text-ellipsis">{courseName}</p>
            <ProgressBar progress={progress} startedAt={startedAt} />
        </motion.div>
    );
}

export default LearningProgressItem;
