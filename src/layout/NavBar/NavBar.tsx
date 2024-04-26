import styled from "styled-components";

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
        <NavBarContainer>
            <StreakCount streak={student.streaks} />
            <ProfileBadge image={profileImage} username={student.username!} />
        </NavBarContainer>
    );
}

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 4rem;
    margin-bottom: 2rem;

    & > .profile-image {
        max-width: 20%;

        border-radius: 10px;

        & > p {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;

export default DashboardNavBar;
