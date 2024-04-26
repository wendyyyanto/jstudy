import { BsLightningCharge } from "react-icons/bs";

function StreakCount({ streak }: { streak: number }) {
    return (
        <div className="flex items-center gap-1">
            <BsLightningCharge size={28} />
            <p className="text-h5-semibold">{streak}</p>
        </div>
    );
}

export default StreakCount;
