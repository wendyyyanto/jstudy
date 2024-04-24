import { ReactNode } from "react";

interface IInputProps {
    type: React.HTMLInputTypeAttribute;
    icon: ReactNode;
    placeholder: string;
}

function Input({ type, icon, placeholder }: IInputProps) {
    return (
        <div className="relative flex">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-5">{icon}</div>
            <input className="rounded-sm flex-1 pl-14 pr-4 h-16 outline-none" type={type} placeholder={placeholder} />
        </div>
    );
}

export default Input;
