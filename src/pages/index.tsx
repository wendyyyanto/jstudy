import DashboardNavBar from "components/DashboardNavBar";
import DashboardSideBar from "components/DashboardSideBar";

import DashboardPage from "./Dashboard";
import CoursesPage from "./Courses";
import AchievementsPage from "./Achievements";

function Dashboard() {
    return (
        <div className="flex">
            <DashboardSideBar />
            <div className="w-screen h-screen px-[60px] py-[50px] pt-0 overflow-hidden">
                <DashboardNavBar />
                {/* <DashboardPage /> */}
                {/* <CoursesPage /> */}
                <AchievementsPage />
            </div>
        </div>
    );
}

export default Dashboard;
