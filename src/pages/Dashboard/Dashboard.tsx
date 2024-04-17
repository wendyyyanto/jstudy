import { LuTerminal } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";

import DashboardNavBar from "components/DashboardNavBar";
import DashboardSideBar from "components/DashboardSideBar";

import trophyIconWhite from "assets/trophy-white.svg";
import trophyIconYellow from "assets/trophy-yellow.svg";
import lampIcon from "assets/lamp.svg";
import giftIcon from "assets/gift.svg";

function Dashboard() {
    return (
        <div className="flex max-w-screen max-h-screen">
            <DashboardSideBar />
            <div className="w-screen h-screen flex flex-col px-[60px] py-[50px] pt-0">
                <DashboardNavBar />
                <h1 className="text-h2-semibold text-stroke-600 mb-5">Dashboard</h1>

                <div className="grid grid-cols-10 grid-rows-7 flex-1 max-h-screen gap-5">
                    <div className="col-span-4 row-span-2 bg-highlight-300 rounded-sm flex flex-col px-8 py-6">
                        <div className="flex gap-2 text-base">
                            <LuTerminal size={20} />
                            <p className="text-caption-regular text-stroke-300">Last module accessed by you</p>
                        </div>
                        <p className="text-subheading-semibold text-stroke-800 mt-5 w-10/12 text-ellipsis whitespace-nowrap overflow-hidden">
                            JavaScript Fundamentals
                        </p>
                        <p className="text-caption-regular text-stroke-300">Last access 2 hours ago</p>
                        <a
                            href="/"
                            className="flex justify-end gap-2 items-center underline text-caption-regular text-stroke-800 mt-8"
                        >
                            Continue <HiArrowRight size={14} />
                        </a>
                    </div>
                    <div className="relative col-span-4 row-span-2 bg-stroke-900 rounded-sm flex items-center pl-10 gap-8 overflow-hidden">
                        <img alt="Trophy Icon" src={trophyIconYellow} className="w-24" />
                        <img
                            alt="Trophy Icon"
                            src={trophyIconWhite}
                            className="absolute -right-1/3 top-1/2 transform -translate-y-1/4 -translate-x-1/4 w-64 opacity-20"
                        />
                        <div className="flex flex-col text-white gap-5">
                            <p className="text-p2-semibold">Your Rank</p>
                            <p className="text-h4-semibold">Beginner</p>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-9 row-span-1 bg-secondary rounded-sm flex items-center gap-4 px-4">
                        <span className="h-14 aspect-square bg-stroke-900 p-3 rounded-full">
                            <img alt="Lamp Icon" src={lampIcon} className="h-full" />
                        </span>
                        <div>
                            <p className="text-p1-regular">Level</p>
                            <p className="text-h3-semibold">04</p>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-9 row-span-1 bg-tertiary-500 rounded-sm flex items-center gap-4 px-4">
                        <span className="h-14 aspect-square bg-stroke-900 p-3 rounded-full">
                            <img alt="Lamp Icon" src={giftIcon} className="h-full" />
                        </span>
                        <div>
                            <p className="text-p1-regular">Point</p>
                            <p className="text-h3-semibold">602</p>
                        </div>
                    </div>
                    <div className="col-span-6 col-start-1 row-span-5 bg-white rounded-sm"></div>
                    <div className="col-span-4 row-span-5 bg-white rounded-sm"></div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
