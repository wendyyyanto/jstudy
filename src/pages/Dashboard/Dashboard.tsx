import { LuTerminal } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";

import DashboardNavBar from "components/DashboardNavBar";
import DashboardSideBar from "components/DashboardSideBar";

import SmallCircle from "pages/Dashboard/components/SmallCircle";

import trophyIconWhite from "assets/trophy-white.svg";
import trophyIconYellow from "assets/trophy-yellow.svg";
import lampIcon from "assets/lamp.svg";
import giftIcon from "assets/gift.svg";
import styled from "styled-components";

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
                        <SmallCircle color="dark">
                            <img alt="Lamp Icon" src={lampIcon} className="h-full" />
                        </SmallCircle>
                        <div>
                            <p className="text-p1-regular">Level</p>
                            <p className="text-h3-semibold">04</p>
                        </div>
                    </div>
                    <div className="col-span-2 col-start-9 row-span-1 bg-tertiary-500 rounded-sm flex items-center gap-4 px-4">
                        <SmallCircle color="dark">
                            <img alt="Lamp Icon" src={giftIcon} className="h-full" />
                        </SmallCircle>
                        <div>
                            <p className="text-p1-regular">Point</p>
                            <p className="text-h3-semibold">602</p>
                        </div>
                    </div>
                    <WhiteCard className="col-span-6 col-start-1 row-span-5 bg-white rounded-sm px-8 py-6">
                        <div className="flex flex-col h-full overflow-y-auto">
                            <p className="text-h5-semibold">Learning Progress</p>
                            <div className="grid grid-cols-2 gap-5 mt-6">
                                <div className="flex flex-col h-28 rounded-sm border border-stroke-300 p-4">
                                    <p className="text-p2-semibold w-11/12 overflow-hidden text-nowrap text-ellipsis">
                                        JavaScript Fundamental
                                    </p>
                                    <div className="flex flex-col gap-1 flex-1 justify-end">
                                        <p className="text-footer-regular text-para-200">
                                            90% complete • started 2 days ago
                                        </p>
                                        <div className="w-full h-3 rounded-sm bg-stroke-50">
                                            <div className="w-11/12 h-3 rounded-sm bg-stroke-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WhiteCard>
                    <WhiteCard className="col-span-4 row-span-5 bg-white rounded-sm px-8 py-6">
                        <div className="flex flex-col h-full overflow-y-auto">
                            <p className="text-h5-semibold">Achievements</p>
                            <div className="flex flex-col my-5">
                                <div className="flex items-center gap-5">
                                    <SmallCircle color="light">
                                        <span>01</span>
                                    </SmallCircle>
                                    <p className="text-subheading-regular">Hello, World</p>
                                </div>
                            </div>
                        </div>
                    </WhiteCard>
                </div>
            </div>
        </div>
    );
}

const WhiteCard = styled.div`
    box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

export default Dashboard;
