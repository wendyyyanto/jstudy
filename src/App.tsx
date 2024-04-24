import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "@/pages";

import Home from "pages/Home";
import DashboardPage from "pages/Dashboard";
import AchievementsPage from "pages/Achievements";
import CoursesPage from "pages/Courses";
import ChallengePage from "pages/Challenge";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "",
                element: <DashboardPage />
            },
            {
                path: "courses",
                element: <CoursesPage />
            },
            {
                path: "challenge",
                element: <ChallengePage />
            },
            {
                path: "achievements",
                element: <AchievementsPage />
            }
        ]
    }
]);

function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
