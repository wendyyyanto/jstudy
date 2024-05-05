import { useUpdateStudentSubscription } from "@/api/student/subscription";
import CourseActive from "./components/CourseActive";
import CourseCompleted from "./components/CourseCompleted";
import CourseList from "./components/CourseList";

function CoursesPage() {
    useUpdateStudentSubscription();

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-5">Courses</h1>

            <div className="h-[80%] grid grid-cols-10 grid-rows-6 gap-5">
                <CourseList />

                <CourseActive />

                <CourseCompleted />
            </div>
        </>
    );
}

export default CoursesPage;
