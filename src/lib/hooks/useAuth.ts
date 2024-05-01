import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import supabase from "@/lib/supabaseClient";
import useStudentContext from "@/context/studentContext";
import { useStudentApi } from "@/api/student";
import { User } from "@supabase/supabase-js";
import { Tables, TablesUpdate } from "@/types/database.types";

dayjs.extend(relativeTime);

const useAuth = () => {
    const navigate = useNavigate();

    const { setStudent } = useStudentContext();
    const { getStudent, updateStudent } = useStudentApi();

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

    const handleResetOnLoad = async (student: Tables<"students">) => {
        await handleResetStreak(student);
    };

    const handleResetChallengeAttempt = async (student: Tables<"students">) => {
        const { last_challenge_timestamp } = student;

        const isNewDay = dayjs().isAfter(last_challenge_timestamp, "d");

        if (isNewDay) {
            const newStudent: TablesUpdate<"students"> = {
                has_failed_challenge: false,
                has_finished_challenge: false
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    const handleResetStreak = async (student: Tables<"students">) => {
        const { last_challenge_timestamp } = student;
        const difference = dayjs().diff(last_challenge_timestamp, "hour");
        if (difference >= 24) {
            const newStudent: TablesUpdate<"students"> = {
                streaks: 0
            };

            const updatedStudent = await updateStudent(student.id, newStudent);
            setStudent(updatedStudent);
        }
    };

    const handleDashboardAuth = async () => {
        const user = await getUser();

        if (!user) {
            navigate("/");
            return;
        }

        const student = await fetchStudent(user);
        await handleResetOnLoad(student);
        await handleResetChallengeAttempt(student);
    };

    return { fetchStudent, handleDashboardAuth, handleAuthenticatedUser };
};

export default useAuth;
