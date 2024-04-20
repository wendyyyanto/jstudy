import DashboardNavBar from "components/DashboardNavBar";
import DashboardSideBar from "components/DashboardSideBar";

import DashboardPage from "./Dashboard";
import CoursesPage from "./Courses";

function Dashboard() {
    return (
        <div className="flex w-screen h-screen">
            <DashboardSideBar />
            <div className="w-screen h-screen flex flex-col px-[60px] py-[50px] pt-0 overflow-hidden">
                <DashboardNavBar />
                {/* <DashboardPage /> */}
                <CoursesPage />
            </div>
        </div>
    );
}

export default Dashboard;
