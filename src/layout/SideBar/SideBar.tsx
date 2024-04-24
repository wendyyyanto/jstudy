import { NavLink, useNavigate } from "react-router-dom";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { SlScreenDesktop } from "react-icons/sl";
import { TbLogout2 } from "react-icons/tb";

import supabase from "@/supabaseClient";

import styled from "styled-components";

function DashboardSideBar() {
    const navigate = useNavigate();

    const onActiveClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "bg-secondary text-p1-bold" : "text-p1-regular";

    const logOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            throw new Error(error.message);
        }

        console.log("Logging Out User Success!");

        navigate("/auth/signin");
    };

    return (
        <SideBarContainer className="bg-tertiary-500">
            <NavLink to={"/"} className="text-h4-extrabold">
                JStudy.
            </NavLink>
            <SideBarItemsContainer>
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={onActiveClass} end>
                            <SlScreenDesktop size={28} /> Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/courses" className={onActiveClass} end>
                            <IoBookOutline size={28} /> Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/challenge" className={onActiveClass} end>
                            <BsLightningCharge size={28} /> Daily Challenge
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/achievements" className={onActiveClass} end>
                            <FaRegStar size={28} /> Achievements
                        </NavLink>
                    </li>
                </ul>
                <div
                    onClick={logOut}
                    className="flex text-p1-regular items-center pl-[15px] mb-[30px] gap-[10px] cursor-pointer"
                >
                    <TbLogout2 size={28} /> Logout
                </div>
            </SideBarItemsContainer>
        </SideBarContainer>
    );
}

const SideBarContainer = styled.div`
    width: 22rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;

    padding-top: 50px;
    padding-left: 35px;

    position: sticky;
`;

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
