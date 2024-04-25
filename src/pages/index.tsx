import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";

import useAuth from "@/hooks/useAuth";

function Dashboard() {
    const { checkUserAndNavigateToLogin } = useAuth();

    useEffect(() => {
        checkUserAndNavigateToLogin();

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
