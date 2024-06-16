import profileImage from "assets/profile.png";
import ProfileBadge from "./ProfileBadge";
import StreakCount from "./StreakCount";
import useStudentContext from "@/context/studentContext";

function DashboardNavBar() {
    const { student } = useStudentContext();

    if (!student) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex justify-between items-center mt-16 mb-8">
            <StreakCount streak={student.streaks} />
            <ProfileBadge image={profileImage} username={student.username!} />
        </div>
    );
}

export default DashboardNavBar;
