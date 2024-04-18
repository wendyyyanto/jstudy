interface ILearningProgressItemProps {
    courseName: string;
    progress: string;
    startedAt: string;
}

function LearningProgressItem({ courseName, progress, startedAt }: ILearningProgressItemProps) {
    return (
        <div className="flex flex-col h-28 rounded-sm border border-stroke-300 p-4">
            <p className="text-p2-semibold w-11/12 overflow-hidden text-nowrap text-ellipsis">{courseName}</p>
            <div className="flex flex-col gap-1 flex-1 justify-end">
                <p className="text-footer-regular text-para-200">
                    {progress} complete • started {startedAt}
                </p>
                <div className="w-full h-3 rounded-sm bg-stroke-50">
                    <div className="w-11/12 h-3 rounded-sm bg-stroke-400"></div>
                </div>
            </div>
        </div>
    );
}

export default LearningProgressItem;
