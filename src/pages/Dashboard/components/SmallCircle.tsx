import { ReactNode } from "react";

interface ISmallCircleProps {
    children: ReactNode;
    color: "dark" | "light";
}

function SmallCircle({ children, color }: ISmallCircleProps) {
    return (
        <div
            className={`h-14 aspect-square flex items-center justify-center ${
                color === "dark" ? "bg-stroke-900 text-white" : "bg-highlight-100"
            } p-3 rounded-full text-subheading-semibold`}
        >
            {children}
        </div>
    );
}

export default SmallCircle;
