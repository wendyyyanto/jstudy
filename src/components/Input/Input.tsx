import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";

type Inputs = {
    email: string;
    password: string;
    username: string;
};

interface IInputProps {
    inputName: "email" | "password" | "username";
    inputType: React.HTMLInputTypeAttribute;
    icon: ReactNode;
    inputPlaceholder: string;
    onChange: () => void;
    errors: FieldErrors<Inputs>;
}

function Input({ inputName, inputType, icon, inputPlaceholder, errors, onChange }: IInputProps) {
    return (
        <>
            <div className="relative flex">
                <div className="absolute top-1/2 transform -translate-y-1/2 left-5">{icon}</div>
                <input
                    defaultValue=""
                    onChange={onChange}
                    className="rounded-sm flex-1 pl-14 pr-4 h-16 outline-none"
                    type={inputType}
                    placeholder={inputPlaceholder}
                />
            </div>
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </>
    );
}

export default Input;
