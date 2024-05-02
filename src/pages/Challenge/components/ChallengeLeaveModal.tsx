import Backdrop from "@/components/Backdrop";
import Button from "@/components/Button";

function ChallengeLeaveModal({ leave, resume }: { leave: () => void; resume: () => void }) {
    return (
        <Backdrop>
            <div className="bg-white text-stroke-900 w-[600px] rounded-md p-8 flex flex-col max-w-96">
                <p className="text-h6-semibold">Are you sure want to leave?</p>
                <p className="text-p2-regular my-4">
                    Once you leave, the challenge can not be continued and will be considered a lose.
                </p>

                <div className="flex gap-2 mt-4 justify-end">
                    <Button
                        height="50px"
                        width="100px"
                        text="EXIT"
                        rounded="small"
                        classes="bg-[#E63946] text-white text-p2-semibold"
                        onClick={leave}
                    />

                    <Button
                        height="50px"
                        width="100px"
                        text="RESUME"
                        rounded="small"
                        classes="bg-highlight-300 text-p2-semibold"
                        onClick={resume}
                    />
                </div>
            </div>
        </Backdrop>
    );
}

export default ChallengeLeaveModal;
