import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";
import supabase from "@/supabaseClient";
import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const {
                data: { user }
            } = await supabase.auth.getUser();

            if (!user) {
                navigate("/auth/signin");
                throw new Error("You're not logged in yet!");
            }
        };

        checkUser();

        return () => {};
    });

    return (
        <div className="flex">
            <DashboardSideBar />
            <div className="w-screen h-screen px-[60px] py-[50px] pt-0 overflow-hidden">
                <DashboardNavBar />
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
