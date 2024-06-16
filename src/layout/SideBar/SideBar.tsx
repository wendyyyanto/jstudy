import { NavLink } from "react-router-dom";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoBookOutline, IoClose } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";

import styled from "styled-components";
import useAuth from "@/lib/hooks/useAuth";
import { LuCrown } from "react-icons/lu";
import { motion, useAnimate } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

function DashboardSideBar() {
    const { handleLogOut } = useAuth();

    const [scope, animate] = useAnimate();
    const isSmall = window.innerWidth < 640;

    const sidebarOpenAnimation = async () => {
        await animate(scope.current, { left: 0 }, { bounce: 0, type: "spring", duration: 0.5 });
    };

    const sidebarCloseAnimation = async () => {
        await animate(scope.current, { left: "-100%" }, { bounce: 0, type: "spring", duration: 0.5 });
    };

    const onActiveClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "bg-secondary text-p1-bold" : "text-p1-regular";

    return (
        <>
            {isSmall && (
                <GiHamburgerMenu size={32} className="absolute top-6 left-6" onClick={() => sidebarOpenAnimation()} />
            )}
            <motion.div
                className="w-80 flex flex-col max-h-screen pt-12 pl-9 sticky bg-tertiary-500 max-sm:min-h-screen max-sm:absolute max-sm:w-full max-sm:z-50 max-sm:top-0 max-sm:left-0"
                ref={scope}
            >
                <NavLink to={"/"} className="text-h4-extrabold" onClick={() => sidebarCloseAnimation()}>
                    JStudy.
                </NavLink>
                {isSmall && (
                    <motion.div className="absolute right-4 top-4" onClick={() => sidebarCloseAnimation()}>
                        <IoClose size={38} />
                    </motion.div>
                )}
                <SideBarItemsContainer>
                    <ul>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={onActiveClass}
                                onClick={() => sidebarCloseAnimation()}
                                end
                            >
                                <SlScreenDesktop size={28} /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/courses"
                                className={onActiveClass}
                                onClick={() => sidebarCloseAnimation()}
                                end
                            >
                                <IoBookOutline size={28} /> Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/challenge"
                                className={onActiveClass}
                                onClick={() => sidebarCloseAnimation()}
                                end
                            >
                                <BsLightningCharge size={28} /> Daily Challenge
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/achievements"
                                className={onActiveClass}
                                onClick={() => sidebarCloseAnimation()}
                                end
                            >
                                <FaRegStar size={28} /> Achievements
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/leaderboard"
                                className={onActiveClass}
                                onClick={() => sidebarCloseAnimation()}
                                end
                            >
                                <LuCrown size={28} /> Leaderboard
                            </NavLink>
                        </li>
                    </ul>
                    <div
                        onClick={handleLogOut}
                        className="flex text-p1-regular items-center pl-[15px] mb-[30px] gap-[10px] cursor-pointer"
                    >
                        <TbLogout2 size={28} /> Logout
                    </div>
                </SideBarItemsContainer>
            </motion.div>
        </>
    );
}

const SideBarItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 60px;

    & > ul {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-right: 10px;

        & > li > a {
            display: flex;
            gap: 10px;
            align-items: center;

            border-radius: 10px;
            cursor: pointer;

            margin-top: 25px;
            padding: 15px;
        }
    }
`;

export default DashboardSideBar;
