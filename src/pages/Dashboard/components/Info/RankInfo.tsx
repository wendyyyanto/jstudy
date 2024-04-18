import trophyIconWhite from "assets/trophy-white.svg";
import trophyIconYellow from "assets/trophy-yellow.svg";

function RankInfo({ rank }: { rank: string }) {
    return (
        <>
            <img alt="Trophy Icon" src={trophyIconYellow} className="w-24" />
            <img
                alt="Trophy Icon"
                src={trophyIconWhite}
                className="absolute -right-1/3 top-1/2 transform -translate-y-1/4 -translate-x-1/4 w-64 opacity-20"
            />
            <div className="flex flex-col text-white gap-5">
                <p className="text-p2-semibold">Your Rank</p>
                <p className="text-h4-semibold">{rank}</p>
            </div>
        </>
    );
}

export default RankInfo;
