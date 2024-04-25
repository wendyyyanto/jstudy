import { useNavigate } from "react-router-dom";

import useAuthContext from "@/context/authContext";
import supabase from "@/supabaseClient";

const useAuth = () => {
    const navigate = useNavigate();

    const { updateAuthUser } = useAuthContext();

    const checkLoggedInUserAndNavigateToLogin = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            navigate("/auth/signin");
            throw new Error("You're not logged in yet!");
        }

        const { data: student } = await supabase.from("students").select().eq("user_id", user.id);

        if (student) {
            updateAuthUser(student[0]);
        }
    };

    const checkLoggedInUserAndNavigateToDashboard = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (user) {
            navigate("/dashboard");
            return;
        }
    };

    return { checkLoggedInUserAndNavigateToLogin, checkLoggedInUserAndNavigateToDashboard };
};

export default useAuth;
