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
        if (!student) {
            return console.error("Error loading student data");
        } else if (!challenge) {
            return console.error("Error loading challenge data");
        }

        const studentId = student.id;
        const challengeId = challenge.id;
        const challengeUserIds = challenge.user_ids;

        const newChallengeUserIds = [...challengeUserIds, studentId!];

        const updatedChallenge: TablesUpdate<"challenges"> = {
            user_ids: newChallengeUserIds
        };

        const updatedStudent: TablesUpdate<"students"> = {
            has_finished_challenge: true
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
