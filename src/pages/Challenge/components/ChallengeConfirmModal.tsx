import { FaRankingStar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { PiWarningCircleFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

import Button from "@/components/Button";
import Backdrop from "@/components/Backdrop";
import useChallengeContext from "@/context/challengeContext";
import { Blocker, useNavigate } from "react-router-dom";
import ChallengeInfo from "./ChallengeInfo";
import { Tables } from "@/types/database.types";

interface IChallengeConfirmModalProps {
    challenge: Tables<"challenges">;
    blocker: Blocker;
}

function ChallengeConfirmModal({ challenge, blocker }: IChallengeConfirmModalProps) {
    const navigate = useNavigate();

    const { setIsModalOpened } = useChallengeContext();

    const handleOnStart = () => {
        setIsModalOpened(false);
    };

    const handleOnCancel = () => {
        navigate("/dashboard");

        if (blocker.state === "blocked") {
            blocker.proceed();
        }
    };

    return (
        <Backdrop>
            <div className="bg-white w-[700px] h-96 rounded-md p-8 flex flex-col">
                <div>
                    <p className="text-p2-regular">Challenge's Topic</p>
                    <p className="text-h5-semibold">{challenge.topics}</p>
                </div>

                <div className="flex gap-8 mt-10">
                    <ChallengeInfo
                        title="Difficulty"
                        icon={<FaRankingStar size={28} />}
                        details={challenge.difficulty}
                    />
                    <ChallengeInfo
                        title="Rewards"
                        icon={<SlBadge size={28} />}
                        details={`${challenge.reward_points} Points`}
                    />
                    <ChallengeInfo
                        title="Durations"
                        icon={<FiClock size={28} />}
                        details={`${challenge.durations} seconds`}
                    />
                </div>

                <div className="flex flex-1 justify-around items-end gap-4-">
                    <div className="flex items-center gap-2">
                        <PiWarningCircleFill size={50} color="#E63946" />
                        <p className="text-caption-regular">
                            Once you failed the challenge (by passing the time limit or leaving the challenge page),
                            your streak will be resetted to 0.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-right text-h5-bold">Are you ready?</p>
                        <div className="flex gap-2">
                            <Button
                                height="50px"
                                width="100px"
                                text="CANCEL"
                                rounded="small"
                                classes="bg-[#E63946] text-white text-p2-semibold"
                                onClick={handleOnCancel}
                            />
                            <Button
                                height="50px"
                                width="100px"
                                text="START"
                                rounded="small"
                                classes="bg-highlight-300 text-p2-semibold"
                                onClick={handleOnStart}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Backdrop>
    );
}

export default ChallengeConfirmModal;
