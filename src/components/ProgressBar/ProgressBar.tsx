interface IProgressBarProps {
    progress: number;
    startedAt?: string;
}

function ProgressBar({ progress, startedAt }: IProgressBarProps) {
    return (
        <div className="flex flex-col gap-1 flex-1 justify-end">
            <p className="text-p1-regular text-para-200">
                {progress}% complete {startedAt ? `• started ${startedAt}` : ""}
            </p>
            <div className="w-full h-3 rounded-sm bg-stroke-50">
                <div className="w-11/12 h-3 rounded-sm bg-stroke-400"></div>
            </div>
        </div>
    );
}

export default ProgressBar;
