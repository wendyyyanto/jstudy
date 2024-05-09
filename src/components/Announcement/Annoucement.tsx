import Backdrop from "@/components/Backdrop";
import { IoClose } from "react-icons/io5";

interface IAnnouncementProps {
    headerTitle: string;
    message: string;
    detail: string;
    onClose: () => void;
}

function Announcement({ headerTitle, message, detail, onClose }: IAnnouncementProps) {
    return (
        <Backdrop>
            <div className="bg-white text-stroke-900 min-w-[400px] max-w-fit rounded-md py-10 px-8 flex flex-col gap-2 relative">
                <p className="text-h5-semibold">{headerTitle}</p>
                <p className="text-p1-regular">{message}</p>
                <p className="text-h4-bold mt-4">{detail}</p>

                <IoClose
                    className="absolute right-4 top-4 cursor-pointer"
                    color="#575C6E"
                    onClick={onClose}
                    size={26}
                />
            </div>
        </Backdrop>
    );
}

export default Announcement;
