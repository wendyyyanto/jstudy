interface IProfileBadge {
    image: string;
    username: string;
}

function ProfileBadge({ image, username }: IProfileBadge) {
    return (
        <div className="flex items-center gap-2 bg-stroke-900 py-2 pl-2 pr-10 profile-image">
            <img className="h-9 aspect-square" alt="Profile Image" src={image} />
            <p className="text-p2-semibold text-white">{username}</p>
        </div>
    );
}

export default ProfileBadge;
