interface IProfileBadge {
    image: string;
    username: string;
}

function ProfileBadge({ image, username }: IProfileBadge) {
    return (
        <div className="flex items-center gap-2 bg-stroke-900 py-2 pl-2 pr-10 max-w-[20%] max-sm:max-w-[50%] rounded-sm">
            <img className="h-9 aspect-square" alt="Profile Image" src={image} />
            <p className="text-p2-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">{username}</p>
        </div>
    );
}

export default ProfileBadge;
