import LearningProgressItem from "./LearningProgressItem";

function LearningProgress() {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Learning Progress</p>
            <div className="grid grid-cols-2 gap-5 mt-6">
                <LearningProgressItem courseName="JavaScript Fundamental" progress="90%" startedAt="2 days ago" />
            </div>
        </div>
    );
}

export default LearningProgress;
