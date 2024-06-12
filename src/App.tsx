import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./routes";

import "react-toastify/dist/ReactToastify.css";
import useAuthContext from "./context/authContext";
import { useEffect } from "react";

function App() {
    const { token, setToken } = useAuthContext();

    if (token) {
        sessionStorage.setItem("token", JSON.stringify(token));
    }

    useEffect(() => {
        const sessionToken = sessionStorage.getItem("token");
        if (sessionToken) {
            const data = JSON.parse(sessionToken);
            setToken(data);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <ToastContainer />
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
