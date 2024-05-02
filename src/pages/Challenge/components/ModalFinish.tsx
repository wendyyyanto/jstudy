import Backdrop from "@/components/Backdrop";
import Button from "@/components/Button";

interface IModalFinishProps {
    headerText: string;
    descriptionText: string;
    handleExit: () => void;
}

function ModalFinish({ headerText, descriptionText, handleExit }: IModalFinishProps) {
    return (
        <Backdrop>
            <div className="bg-white text-stroke-900 w-[600px] rounded-md p-8 flex flex-col max-w-96">
                <p className="text-h6-semibold">{headerText}</p>
                <p className="text-p2-regular my-4">{descriptionText}</p>

                <Button
                    height="50px"
                    width="100px"
                    text="EXIT"
                    rounded="small"
                    classes="bg-[#E63946] text-white text-p2-semibold mt-4 self-end"
                    onClick={handleExit}
                />
            </div>
        </Backdrop>
    );
}

export default ModalFinish;
