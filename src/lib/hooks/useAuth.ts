import { useNavigate } from "react-router-dom";

import supabase from "@/lib/supabaseClient";
import useStudentContext from "@/context/studentContext";
import { useStudentApi } from "@/api/student";
import { User } from "@supabase/supabase-js";
import { useReset } from "./useReset";

const useAuth = () => {
    const navigate = useNavigate();

    const { handleResetOnLoad } = useReset();

    const { setStudent } = useStudentContext();
    const { getStudent } = useStudentApi();

    const getUser = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        return user;
    };

    const fetchStudent = async (user: User) => {
        const student = await getStudent(user.id as string);

        if (!student) {
            throw new Error("Something went wrong, failed fetching Student data");
        }

        setStudent(student);

        return student;
    };

    const handleAuthenticatedUser = async () => {
        const user = await getUser();

        if (!user) return;

        navigate("/dashboard");
    };

    const handleDashboardAuth = async () => {
        const user = await getUser();

        if (!user) {
            navigate("/");
            return;
        }

        const student = await fetchStudent(user);
        await handleResetOnLoad(student);
    };

    return { fetchStudent, handleDashboardAuth, handleAuthenticatedUser };
};

export default useAuth;
