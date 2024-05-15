interface IProgressBarProps {
    progress: number;
    startedAt?: string;
}

function ProgressBar({ progress, startedAt }: IProgressBarProps) {
    return (
        <div className="flex flex-col gap-1 flex-1 justify-end">
            <p className="text-p1-regular text-para-200">{startedAt ? `started ${startedAt}` : ""}</p>
            <div className="w-full flex items-center gap-2 text-p1-semibold">
                <div className="w-full flex h-3 rounded-sm bg-stroke-50">
                    <div className="h-3 rounded-sm bg-stroke-400" style={{ width: `${progress}%` }}></div>
                </div>
                {progress}%
            </div>
        </div>
    );
}

export default ProgressBar;
