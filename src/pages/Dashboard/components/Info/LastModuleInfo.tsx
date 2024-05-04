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
            <div className="flex gap-2 items-center">
                <LuTerminal size={22} />
                <p className="text-p1-regular text-stroke-300">Modul yang baru saja kamu akses</p>
            </div>

            <p className="text-h5-semibold text-stroke-800 mt-5 w-10/12 text-ellipsis whitespace-nowrap overflow-hidden">
                {courseName}
            </p>
            <p className="text-p1-regular text-stroke-300 mt-2">Last accessed {lastAccessed}</p>

            <a
                href={address}
                className="flex justify-end gap-2 items-center underline text-p2-regular text-stroke-800 mt-8"
            >
                Lanjutin <HiArrowRight size={18} />
            </a>
        </>
    );
}

export default LastModuleInfo;
