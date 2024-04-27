import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CodeBlock, dracula } from "react-code-blocks";

import { FaRankingStar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

import supabase from "@/supabaseClient";

import ModalConfirmChallenge from "./components/ModalConfirmChallenge";
import CountdownChallenge from "./components/CountdownChallenge";

import useChallengeContext from "@/context/challengeContext";
import useStudentContext from "@/context/studentContext";
import ModalFinish from "./components/ModalFinish";

type Inputs = {
    answer: string;
};

function ChallengePage() {
    const { handleSubmit, control } = useForm<Inputs>();

    const { student } = useStudentContext();
    const { isOpened, isCompleted, challenge, updateChallenge, updateIsOpened, updateIsCompleted } =
        useChallengeContext();

    useEffect(() => {
        updateIsOpened(true);

        const fetchChallenge = async () => {
            const { data: challenge, error } = await supabase
                .from("challenges")
                .select("*")
                .eq("id", 6)
                .limit(1)
                .single();

            if (error) {
                throw new Error(error.message);
            }

            console.log(challenge);
            updateChallenge(challenge);
        };

        fetchChallenge();
    }, []);

    const checkAnswer = (answer: string): boolean => {
        return challenge?.answers.includes(answer.trim()) as boolean;
    };

    const handleSubmitAnswer: SubmitHandler<Inputs> = async ({ answer }) => {
        //Check answer
        const isCorrect = checkAnswer(answer);

        if (isCorrect) {
            updateIsCompleted(isCorrect);
            return;
        } else {
            console.log("False!");
            return;
        }
    };

    if (isCompleted) {
        return (
            <ModalFinish
                headerText="Congratulations!"
                descriptionText="You answer the question correctly! The challenge is completed for today 🎉"
            />
        );
    }

    if (isOpened) {
        return <ModalConfirmChallenge />;
    }

    if (!challenge) {
        return <p>Loading Challenge Data...</p>;
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
                        <CountdownChallenge durations={challenge.durations} />
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
