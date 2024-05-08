import SmallCircle from "../SmallCircle";
import giftIcon from "assets/gift.svg";

function PointInfo({ points }: { points: number }) {
    return (
        <>
            <SmallCircle color="dark">
                <img alt="Lamp Icon" src={giftIcon} className="h-full" />
            </SmallCircle>
            <div>
                <p className="text-p1-regular">Poin</p>
                <p className="text-h3-semibold">{points}</p>
            </div>
        </>
    );
}

export default PointInfo;
