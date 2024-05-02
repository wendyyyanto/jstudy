import { ReactNode } from "react";

function Backdrop({ children }: { children: ReactNode }) {
    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-para-900 bg-opacity-25">
            <div className="w-screen h-screen relative flex items-center justify-center">{children}</div>
        </div>
    );
}

export default Backdrop;
