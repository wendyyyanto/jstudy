import { HiArrowRight } from "react-icons/hi";
import { LuTerminal } from "react-icons/lu";

interface ILastModuleInfoProps {
    courseName: string;
    lastAccessed: string;
    address: string;
}

function LastModuleInfo({ courseName, lastAccessed, address }: ILastModuleInfoProps) {
    return (
        <>
            <div className="flex gap-2 text-base">
                <LuTerminal size={20} />
                <p className="text-caption-regular text-stroke-300">Last module accessed by you</p>
            </div>

            <p className="text-subheading-semibold text-stroke-800 mt-5 w-10/12 text-ellipsis whitespace-nowrap overflow-hidden">
                {courseName}
            </p>
            <p className="text-caption-regular text-stroke-300">Last accessed {lastAccessed}</p>

            <a
                href={address}
                className="flex justify-end gap-2 items-center underline text-caption-regular text-stroke-800 mt-8"
            >
                Continue <HiArrowRight size={14} />
            </a>
        </>
    );
}

export default LastModuleInfo;
