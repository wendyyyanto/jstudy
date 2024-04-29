import { useNavigate } from "react-router-dom";

import supabase from "@/lib/supabaseClient";
import useAuthContext from "@/context/authContext";
import useStudentContext from "@/context/studentContext";
import { useStudentApi } from "@/api/student";
import { useEffect, useState } from "react";

const useAuth = () => {
    const navigate = useNavigate();

    const { setAuthUser, authUser } = useAuthContext();

    const { setStudent } = useStudentContext();
    const { getStudent } = useStudentApi();

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        handleDashboardAuth();

        const fetchStudent = async () => {
            if (!authUser) return;

            const student = await getStudent(authUser?.id as string);

            if (!student) {
                throw new Error("Something went wrong, failed fetching Student data");
            }

            console.log(student);

            setStudent(student);
        };

        fetchStudent();

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    const handleDashboardAuth = async (path: string = "/") => {
        const {
            data: { user }
        } = await supabase.auth.getUser();

        if (!user) {
            navigate(path);
            return;
        }

        setAuthUser(user);
        setIsLoaded(true);

        navigate("/dashboard");
    };

    return { handleDashboardAuth };
};

export default useAuth;
