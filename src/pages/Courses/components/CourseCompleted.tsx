import CourseCompletedItem from "./CourseCompletedItem";

function CourseCompleted() {
    return (
        <div className="col-span-3 row-span-3 flex flex-col bg-highlight-200 rounded-sm px-8 py-10">
            <p className="text-h5-semibold">Sudah Lulus</p>

            <div className="flex flex-col gap-2 mt-4 pb-1 pr-2 overflow-auto">
                <CourseCompletedItem title="Introduction to JavaScript" completedAt="2 days ago" />
            </div>
        </div>
    );
}

export default CourseCompleted;
