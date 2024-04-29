import Button from "@/components/Button";
import { useChallenge } from "../hooks/useChallenge";

interface IModalFinishProps {
    headerText: string;
    descriptionText: string;
}

function ModalFinish({ headerText, descriptionText }: IModalFinishProps) {
    const { handleExitChallenge } = useChallenge();

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-para-900 bg-opacity-25">
            <div className="w-screen h-screen relative flex items-center justify-center">
                <div className="bg-white text-stroke-900 w-[600px] rounded-md p-8 flex flex-col max-w-96">
                    <p className="text-h6-semibold">{headerText}</p>
                    <p className="text-p2-regular my-4">{descriptionText}</p>

                    <Button
                        height="50px"
                        width="100px"
                        text="EXIT"
                        rounded="small"
                        classes="bg-[#E63946] text-white text-p2-semibold mt-4 self-end"
                        onClick={handleExitChallenge}
                    />
                </div>
            </div>
        </div>
    );
}

export default ModalFinish;
