import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import router from "./routes";

import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <main>
            <ToastContainer />
            <RouterProvider router={router} />
        </main>
    );
}

export default App;
