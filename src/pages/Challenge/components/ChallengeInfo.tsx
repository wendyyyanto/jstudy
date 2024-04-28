import { ReactNode } from "react";

interface IChallengeInfoProps {
    title: string;
    icon: ReactNode;
    details: string;
}

function ChallengeInfo({ title, icon, details }: IChallengeInfoProps) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-caption-regular">{title}</p>
            <div className="flex items-end gap-2">
                {icon}
                <p className="text-p2-semibold">{details}</p>
            </div>
        </div>
    );
}

export default ChallengeInfo;
