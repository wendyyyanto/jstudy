import { ChallengeInputs } from "@/types/challenge";
import { Control, Controller } from "react-hook-form";

function ChallengeInputAnswer({ control }: { control: Control<ChallengeInputs> }) {
    return (
        <>
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
        </>
    );
}

export default ChallengeInputAnswer;
