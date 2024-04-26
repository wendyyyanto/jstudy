import { FaRankingStar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { PiWarningCircleFill } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

import Button from "@/components/Button";
import useChallengeContext from "@/context/challengeContext";
import { useNavigate } from "react-router-dom";

function ModalConfirmChallenge() {
    const navigate = useNavigate();
    const { updateIsConfirmed, updateIsOpened } = useChallengeContext();

    const handleOnStart = () => {
        updateIsOpened(false);
        updateIsConfirmed(true);
    };

    const handleOnCancel = () => {
        navigate("/dashboard", { replace: true });
        updateIsOpened(false);
    };

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-para-900 bg-opacity-25">
            <div className="w-screen h-screen relative flex items-center justify-center">
                <div className="bg-white w-[700px] h-96 rounded-md p-8 flex flex-col">
                    <div>
                        <p className="text-p2-regular">Challenge's Topic</p>
                        <p className="text-h5-semibold">Variables</p>
                    </div>

                    <div className="flex gap-8 mt-10">
                        <div className="flex flex-col gap-2">
                            <p className="text-caption-regular">Difficulty</p>
                            <div className="flex items-end gap-2">
                                <FaRankingStar size={28} />
                                <p className="text-p2-semibold">Medium</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-caption-regular">Reward</p>
                            <div className="flex items-end gap-2">
                                <SlBadge size={28} />
                                <p className="text-p2-semibold">10 Points</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-caption-regular">Time Limit</p>
                            <div className="flex items-end gap-2">
                                <FiClock size={28} />
                                <p className="text-p2-semibold">7 Minutes</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 justify-around items-end gap-4-">
                        <div className="flex items-center gap-2">
                            <PiWarningCircleFill size={50} color="#E63946" />
                            <p className="text-caption-regular">
                                We encourage you to prepare an IDE/Text Editor in case the challenge requires you to
                                run/create code snippet
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
            </div>
        </div>
    );
}

export default ModalConfirmChallenge;
