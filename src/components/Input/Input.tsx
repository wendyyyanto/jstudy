import { ReactNode } from "react";

interface IInputProps {
    type: React.HTMLInputTypeAttribute;
    icon: ReactNode;
    placeholder: string;
}

function Input({ type, icon, placeholder }: IInputProps) {
    return (
        <div className="relative flex rounded-sm">
            <div className="absolute top-1/2 transform -translate-y-1/2 left-5 box-border">{icon}</div>
            <input className="pl-14 pr-4 flex-1 box-border h-16 outline-none" type={type} placeholder={placeholder} />
        </div>
    );
}

export default Input;
