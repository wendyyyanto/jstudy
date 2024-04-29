import { Outlet } from "react-router-dom";

import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";
import useAuth from "@/lib/hooks/useAuth";

function Dashboard() {
    useAuth();

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
