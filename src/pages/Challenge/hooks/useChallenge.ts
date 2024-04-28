import { useChallengeApi } from "@/api/challenge";
import { useStudentApi } from "@/api/student";
import useChallengeContext from "@/context/challengeContext";
import useStudentContext from "@/context/studentContext";
import { ChallengeInputs } from "@/types/challenge";
import { TablesUpdate } from "@/types/database.types";
import { useEffect } from "react";
import { SubmitHandler } from "react-hook-form";

export const useChallenge = () => {
    const { getChallenge, updateChallenge } = useChallengeApi();
    const { updateStudent } = useStudentApi();

    const { student } = useStudentContext();
    const { challenge, setChallenge, setIsOpened, setIsCompleted } = useChallengeContext();

    useEffect(() => {
        setIsOpened(true);

        if (student) {
            setIsCompleted(student.has_finished_challenge);
        }

        const fetchChallenge = async () => {
            const challenge = await getChallenge(6);

            setChallenge(challenge);
        };

        fetchChallenge();
    }, []);

    const handleUpdateChallege = async () => {
        const { id: studentId, points, current_xp, streaks } = student!;
        const { id: challengeId, user_ids, reward_points, reward_xp } = challenge!;

        const newChallengeUserIds = [...user_ids, studentId!];

        const updatedChallenge: TablesUpdate<"challenges"> = {
            user_ids: newChallengeUserIds
        };

        const updatedStudent: TablesUpdate<"students"> = {
            points: points + reward_points,
            current_xp: current_xp + reward_xp,
            streaks: streaks + 1,
            has_finished_challenge: true,
            last_challenge_timestamp: new Date().toISOString()
        };

        setIsCompleted(true);

        const challengeResponse = updateChallenge(challengeId, updatedChallenge);
        const studentResponse = updateStudent(studentId, updatedStudent);

        console.log(challengeResponse, studentResponse);
    };

    const checkAnswer = (answer: string): boolean => {
        return challenge?.answers.includes(answer.trim()) as boolean;
    };

    const handleSubmitAnswer: SubmitHandler<ChallengeInputs> = async ({ answer }) => {
        const isCorrect = checkAnswer(answer);

        if (isCorrect) {
            handleUpdateChallege();

            return;
        } else {
            return;
        }
    };

    return {
        handleUpdateChallege,
        handleSubmitAnswer,
        checkAnswer
    };
};
