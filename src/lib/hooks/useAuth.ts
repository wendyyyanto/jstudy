import { useNavigate } from "react-router-dom";

import supabase from "@/lib/supabaseClient";
import useStudentContext from "@/context/studentContext";
import { useStudentApi } from "@/api/student";
import { User } from "@supabase/supabase-js";
import { useReset } from "./useReset";
import { Bounce, toast } from "react-toastify";
import useAchievementContext from "@/context/achievementContext";
import useChallengeContext from "@/context/challengeContext";
import useAuthContext from "@/context/authContext";

const useAuth = () => {
    const navigate = useNavigate();

    const { handleResetOnLoad } = useReset();

    const { setStudent, resetStudentState } = useStudentContext();
    const { resetAchievementState } = useAchievementContext();
    const { resetChallengeState } = useChallengeContext();
    const { setIsLoggedIn } = useAuthContext();
    const { getStudent } = useStudentApi();

    const fetchStudent = async (user: User) => {
        const student = await getStudent(user.id as string);

        if (!student) {
            throw new Error("Something went wrong, failed fetching Student data");
        }

        setStudent(student);

        return student;
    };

    const handleLogOut = async () => {
        const { error } = await supabase.auth.signOut();

        if (error) {
            showToast("error", error.message);
            throw new Error(error.message);
        }

        resetStudentState();
        resetAchievementState();
        resetChallengeState();

        showToast("success", "Logging Out Success!");
        navigate("/auth/signin");
    };

    const handleDashboardAuth = async () => {
        const tokenJSON = sessionStorage.getItem("token");
        if (!tokenJSON) {
            navigate("/");
            showToast("error", "You're not logged in yet!");
            setIsLoggedIn(false);
            return;
        }

        const token = JSON.parse(tokenJSON);
        const student = await fetchStudent(token.session.user);
        await handleResetOnLoad(student);
    };

    const showToast = (type: "success" | "error", message: string) => {
        return toast(message, {
            type,
            autoClose: 4000,
            hideProgressBar: false,
            pauseOnFocusLoss: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            transition: Bounce
        });
    };

    return { fetchStudent, handleDashboardAuth, showToast, handleLogOut };
};

export default useAuth;
