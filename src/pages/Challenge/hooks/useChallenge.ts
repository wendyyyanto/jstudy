import { useChallengeApi } from "@/api/challenge";
import { useStudentApi } from "@/api/student";
import useChallengeContext from "@/context/challengeContext";
import useStudentContext from "@/context/studentContext";
import { ChallengeInputs } from "@/types/challenge";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export const useChallenge = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { getChallenge, updateChallenge } = useChallengeApi();
    const { updateStudent } = useStudentApi();

    const { student } = useStudentContext();
    const { challenge, isModalOpened, setIsModalOpened, setChallenge, duration, setDuration } = useChallengeContext();

    useEffect(() => {
        if (!challenge) {
            fetchChallenge();
        }

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [challenge]);

    const fetchChallenge = async () => {
        const challenge = await getChallenge(6);

        setChallenge(challenge);
        setDuration(challenge.durations * 1000);
    };

    const handleUpdateChallege = async () => {
        const {
            id: studentId,
            points,
            current_xp,
            streaks,
            challenges_completed,
            total_challenges_completed
        } = student!;
        const { id: challengeId, user_ids, reward_points, reward_xp } = challenge!;

        const newChallengeUserIds = [...user_ids, studentId];
        const newChallengesCompleted = [...challenges_completed, challengeId];

        const updatedChallenge: TablesUpdate<"challenges"> = {
            user_ids: newChallengeUserIds
        };

        const updatedStudent: TablesUpdate<"students"> = {
            points: points + reward_points,
            current_xp: current_xp + reward_xp,
            streaks: streaks + 1,
            has_finished_challenge: true,
            last_challenge_timestamp: new Date().toISOString(),
            challenges_completed: newChallengesCompleted,
            total_challenges_completed: total_challenges_completed + 1
        };

        await updateChallenge(challengeId, updatedChallenge);
        await updateStudent(studentId, updatedStudent);
    };

    const handleSubmitAnswer: SubmitHandler<ChallengeInputs> = async ({ multiple_choices }) => {
        const isCorrect = checkAnswer(multiple_choices);

        if (isCorrect) {
            handleUpdateChallege();

            return;
        } else {
            return;
        }
    };

    const updateFailedStudent = async () => {
        const updatedStudent: TablesUpdate<"students"> = {
            has_failed_challenge: true,
            streaks: 0,
            last_challenge_timestamp: new Date().toISOString()
        };

        const studentId = student?.id as number;

        await updateStudent(studentId, updatedStudent);
    };

    const checkAnswer = (answer: string): boolean => {
        return challenge?.answer === answer;
    };

    const isStudentFailed = () => {
        return student?.has_failed_challenge;
    };

    const isStudentCompleted = () => {
        return student?.has_finished_challenge;
    };

    return {
        isModalOpened,
        challenge,
        student,
        duration,
        navigate,
        location,
        handleUpdateChallege,
        updateFailedStudent,
        handleSubmitAnswer,
        setDuration,
        isStudentFailed,
        isStudentCompleted,
        setIsModalOpened,
        checkAnswer
    };
};
