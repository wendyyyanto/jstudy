import { useNavigate } from "react-router-dom";

import useAuthContext from "@/context/authContext";
import supabase from "@/supabaseClient";

const useAuth = () => {
    const navigate = useNavigate();

    const { updateAuthUser } = useAuthContext();

    const checkUserAndNavigateToLogin = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            navigate("/auth/signin");
            throw new Error("You're not logged in yet!");
        }

        updateAuthUser(user);
    };

    const checkUserSessionAndNavigateToDashboard = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (user) {
            navigate("/dashboard");
            return;
        }
    };

    return { checkUserAndNavigateToLogin, checkUserSessionAndNavigateToDashboard };
};

export default useAuth;
