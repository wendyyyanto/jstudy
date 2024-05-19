import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface ICourseItemProps {
    title: string;
    description: string;
    icon: string;
    level: string;
    link: string;
    onStartCourse: () => void;
}

function CourseItem({ title, description, icon, level, link, onStartCourse }: ICourseItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            id="course-item"
            className="h-64 flex flex-col rounded-sm border border-stroke-100 py-6 px-8"
        >
            <p className="text-h5-semibold">{title}</p>
            <p className="text-p1-regular mt-2 text-para-300">{description}</p>

            <div className="flex flex-1 items-end justify-between">
                <div className="flex gap-2">
                    <img className="h-4" src={icon} alt="Level Icon" />
                    <p className="text-p1-regular text-para-200">{level}</p>
                </div>
                <NavLink
                    className="w-auto h-auto bg-highlight-300 text-p1-semibold py-3 px-4 rounded-sm"
                    onClick={onStartCourse}
                    to={link}
                >
                    Mulai Kelas
                </NavLink>
            </div>
        </motion.div>
    );
}

export default CourseItem;
