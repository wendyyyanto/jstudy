import styled from "styled-components";

import profileImage from "assets/profile.png";
import ProfileBadge from "./ProfileBadge";
import StreakCount from "./StreakCount";
import useAuthContext from "@/context/authContext";

function DashboardNavBar() {
    const { authUser: user } = useAuthContext();

    if (!user) {
        return;
    }

    return (
        <NavBarContainer>
            <StreakCount streak={user.streaks} />
            <ProfileBadge image={profileImage} username={user.username!} />
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
