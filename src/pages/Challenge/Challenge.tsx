import { useForm } from "react-hook-form";

import { FaRankingStar } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

import ChallengeConfirmModal from "./components/ChallengeConfirmModal";
import ChallengeCountdown from "./components/ChallengeCountdown";
import ChallengeInputAnswer from "./components/ChallengeInputAnswer";
import ChallengeQuestion from "./components/ChallengeQuestion";
import ModalFinish from "./components/ModalFinish";

import useChallengeContext from "@/context/challengeContext";

import { useUpdateStudentSubscription } from "@/api/student/subscription";

import { useChallenge } from "./hooks/useChallenge";

import { ChallengeInputs } from "@/types/challenge";

function ChallengePage() {
    useUpdateStudentSubscription();

    const { handleSubmit, control } = useForm<ChallengeInputs>();

    const { handleSubmitAnswer } = useChallenge();

    const { isOpened, isCompleted, challenge } = useChallengeContext();

    if (!challenge) {
        return <p>Loading Challenge Data...</p>;
    }

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
                    <div className="flex gap-2 bg-stroke-500 p-4 rounded-sm justify-end end text-white">
                        <ChallengeCountdown durations={challenge.durations} />
                    </div>
                </div>

                <div className="my-8 max-h-[50vh] overflow-auto">
                    <ChallengeQuestion challenge={challenge} />
                </div>

                <div className="flex">
                    <form className="flex flex-1 gap-4" onSubmit={handleSubmit(handleSubmitAnswer)}>
                        <ChallengeInputAnswer control={control} />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ChallengePage;
