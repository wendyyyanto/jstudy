import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CodeBlock, dracula } from "react-code-blocks";

import { FaRankingStar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

import ChallengeConfirmModal from "./components/ChallengeConfirmModal";
import ChallengeCountdown from "./components/ChallengeCountdown";

import useChallengeContext from "@/context/challengeContext";
import ModalFinish from "./components/ModalFinish";
import { useChallenge, useUpdateChallenge } from "@/api/challenge";
import useStudentContext from "@/context/studentContext";
import { TablesUpdate } from "@/types/database.types";
import { useUpdateStudent } from "@/api/student";
import { useUpdateStudentSubscription } from "@/api/student/subscription";

type Inputs = {
    answer: string;
};

function ChallengePage() {
    useUpdateStudentSubscription();

    const { handleSubmit, control } = useForm<Inputs>();

    const { updateChallenge } = useUpdateChallenge();
    const { updateStudent } = useUpdateStudent();
    const { getChallenge } = useChallenge();
    const { student } = useStudentContext();
    const { isOpened, isCompleted, challenge, setChallenge, setIsOpened, setIsCompleted } = useChallengeContext();

    if (!student) {
        throw new Error("Failed fetching student data");
    }

    useEffect(() => {
        setIsOpened(true);
        setIsCompleted(student.has_finished_challenge);

        const fetchChallenge = async () => {
            const challenge = await getChallenge(6);

            setChallenge(challenge);
        };

        fetchChallenge();
    }, []);

    if (!challenge) {
        return <p>Loading Challenge Data...</p>;
    }

    const checkAnswer = (answer: string): boolean => {
        return challenge.answers.includes(answer.trim()) as boolean;
    };

    const handleSubmitAnswer: SubmitHandler<Inputs> = async ({ answer }) => {
        const isCorrect = checkAnswer(answer);

        if (isCorrect) {
            handleUpdateChallege();

            return;
        } else {
            return;
        }
    };

    const handleUpdateChallege = async () => {
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

    if (isCompleted) {
        return (
            <ModalFinish
                headerText="Congratulations 🎉"
                descriptionText="The challenge is completed for today. See you tomorrow 👋"
            />
        );
    }

    if (isOpened) {
        return <ChallengeConfirmModal />;
    }

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-5">Daily Challenge</h1>

            <div className="flex flex-col">
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <div className="flex grow-0 gap-2 bg-highlight-400 p-4 rounded-sm">
                            <FaRankingStar size={24} />
                            <p className="text-h6-semibold">{challenge.difficulty}</p>
                        </div>
                        <div className="flex grow-0 gap-2 bg-highlight-400 p-4 rounded-sm">
                            <SlBadge size={24} />
                            <p className="text-h6-semibold">{challenge.reward_points} Points</p>
                        </div>
                    </div>
                    <div className="flex  gap-2 bg-stroke-500 p-4 rounded-sm justify-end end text-white">
                        <ChallengeCountdown durations={challenge.durations} />
                    </div>
                </div>

                <div className="my-8 max-h-[50vh] overflow-auto">
                    <p className="text-h6-semibold mb-4">{challenge.question}</p>
                    {challenge.snippet && <CodeBlock text={challenge.snippet} language="javascript" theme={dracula} />}
                </div>

                <div className="flex">
                    <form className="flex flex-1 gap-4" onSubmit={handleSubmit(handleSubmitAnswer)}>
                        <Controller
                            name="answer"
                            control={control}
                            render={({ field: { onChange } }) => (
                                <input
                                    className="flex-1 px-8 py-5 text-p2-semibold text-para-700 rounded-md outline-none"
                                    name="answer"
                                    type="text"
                                    placeholder="Write your answer here..."
                                    onChange={onChange}
                                    autoComplete="false"
                                />
                            )}
                        />

                        <input
                            type="submit"
                            placeholder="Submit"
                            className="py-5 px-10 bg-stroke-500 text-white text-subheading-semibold rounded-md cursor-pointer"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChallengePage;
