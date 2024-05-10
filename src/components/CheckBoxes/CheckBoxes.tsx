import { ChallengeInputs } from "@/types/challenge";
import { useState } from "react";
import { Control, useController } from "react-hook-form";

interface ICheckBoxesProps {
    options: string[];
    name: "multiple_choices";
    control: Control<ChallengeInputs>;
}

function CheckBox({ options, name, control }: ICheckBoxesProps) {
    const { field } = useController({ control, name });

    const [value, setValue] = useState(field.value || "");

    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                {options.map((option, index) => (
                    <div className="flex gap-2 items-center p-4 bg-highlight-400 rounded-sm" key={index}>
                        <input
                            className="outline-none h-4 w-4"
                            onChange={(e) => {
                                field.onChange(e.target.value);
                                setValue(e.target.value);
                            }}
                            checked={option === value}
                            id={index.toString()}
                            type="radio"
                            value={option}
                        />
                        <label className="text-p2-semibold" htmlFor={index.toString()}>
                            {option}
                        </label>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CheckBox;
