import styled from "styled-components";
import { BsLightningCharge } from "react-icons/bs";

import profileImage from "assets/profile.png";

function DashboardNavBar() {
    return (
        <NavBarContainer>
            <div className="flex items-center gap-1">
                <BsLightningCharge size={28} />
                <p className="text-h5-semibold">03</p>
            </div>
            <div className="flex items-center gap-2 bg-stroke-900 py-3 pl-2 pr-6 profile-image">
                <img className="h-10 aspect-square" alt="Profile Image" src={profileImage} />
                <p className="text-p2-semibold text-white">Wendy</p>
            </div>
        </NavBarContainer>
    );
}

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 8rem;

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
