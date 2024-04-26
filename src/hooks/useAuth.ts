import { useNavigate } from "react-router-dom";

import supabase from "@/supabaseClient";
import useAuthContext from "@/context/authContext";
import useStudentContext from "@/context/studentContext";

const useAuth = () => {
    const navigate = useNavigate();

    const { updateAuthUser } = useAuthContext();
    const { updateStudent } = useStudentContext();

    const checkLoggedInUserAndNavigateToLogin = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            navigate("/auth/signin");
            throw new Error("You're not logged in yet!");
        }

        updateAuthUser(user);

        const { data: student } = await supabase.from("students").select().eq("user_id", user.id);

        if (student) {
            updateStudent(student[0]);
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
