import Backdrop from "@/components/Backdrop";
import useAchievementContext from "@/context/achievementContext";
import { Tables } from "@/types/database.types";
import { IoClose } from "react-icons/io5";

function AchievementModal({ achievement }: { achievement: Tables<"achievements"> }) {
    const { setAchievementModalShown } = useAchievementContext();

    const handleClose = () => {
        setAchievementModalShown(false);
    };

    return (
        <Backdrop>
            <div className="bg-white text-stroke-900 min-w-[400px] max-w-fit rounded-md py-10 px-8 flex flex-col gap-2 relative">
                <p className="text-h5-semibold">Achievement Unlocked 🎉</p>
                <p className="text-p1-semibold">Congrats, You received a new achievement!</p>
                <p className="text-p2-semibold mt-10">Achievement name:</p>
                <p className="text-h4-bold">" {achievement.title} "</p>

                <IoClose
                    className="absolute right-4 top-4 cursor-pointer"
                    color="#575C6E"
                    onClick={handleClose}
                    size={26}
                />
            </div>
        </Backdrop>
    );
}

export default AchievementModal;
