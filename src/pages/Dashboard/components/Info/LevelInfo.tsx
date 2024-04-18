import SmallCircle from "../SmallCircle";
import lampIcon from "assets/lamp.svg";

function LevelInfo({ level }: { level: string }) {
    return (
        <>
            <SmallCircle color="dark">
                <img alt="Lamp Icon" src={lampIcon} className="h-full" />
            </SmallCircle>
            <div>
                <p className="text-p1-regular">Level</p>
                <p className="text-h3-semibold">{level}</p>
            </div>
        </>
    );
}

export default LevelInfo;
