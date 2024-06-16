import { BsLightningCharge } from "react-icons/bs";

function StreakCount({ streak }: { streak: number }) {
    const isSmall = window.innerWidth < 640;

    return (
        <div className="flex items-center gap-1 max-sm:gap-0">
            <BsLightningCharge size={isSmall ? 24 : 28} />
            <p className="text-h5-semibold">{streak}</p>
        </div>
    );
}

export default StreakCount;
