import CourseActiveItem from "./CourseActiveItem";

function CourseActive() {
    return (
        <div className="col-span-3 row-span-3 flex flex-col bg-secondary rounded-sm px-8 py-10">
            <h1 className="text-h5-semibold">Kelas Aktif</h1>

            <div className="flex flex-col gap-2 mt-4 pr-2 overflow-auto">
                <CourseActiveItem title="Functions" courseAddress="/" />
            </div>
        </div>
    );
}

export default CourseActive;
