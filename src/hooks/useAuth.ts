import { useNavigate } from "react-router-dom";

import supabase from "@/supabaseClient";
import useAuthContext from "@/context/authContext";
import useStudentContext from "@/context/studentContext";

const useAuth = () => {
    const navigate = useNavigate();

    const { updateAuthUser } = useAuthContext();
    const { updateStudent } = useStudentContext();

    const checkLoggedInUserAndNavigateToDashboard = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            navigate("/auth/signin");
            throw new Error("You're not logged in yet!");
        }

        navigate("/dashboard");
        updateAuthUser(user);

        const { data: student } = await supabase.from("students").select().eq("user_id", user.id);

        if (!student) {
            throw new Error("Something went wrong, failed fetching Student data");
        }

        updateStudent(student[0]);
    };

    return { checkLoggedInUserAndNavigateToDashboard };
};

export default useAuth;
