import Home from "pages/Home";
import Dashboard from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import AchievementsPage from "./pages/Achievements";
import CoursesPage from "./pages/Courses";

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
