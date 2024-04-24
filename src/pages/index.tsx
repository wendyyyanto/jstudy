import DashboardNavBar from "@/layout/NavBar";
import DashboardSideBar from "@/layout/SideBar";

import { Outlet } from "react-router-dom";

function Dashboard() {
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
