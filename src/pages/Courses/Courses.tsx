import { useUpdateStudentSubscription } from "@/api/student/subscription";
import CourseActive from "./components/CourseActive";
import CourseCompleted from "./components/CourseCompleted";
import CourseList from "./components/CourseList";
import { useCourses } from "./hooks/useCourses";

function CoursesPage() {
    useUpdateStudentSubscription();

    const { courses, onStartCourse, completedStudentCourses, studentCourses } = useCourses();

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-5">Courses</h1>

            <div className="h-max-full h-min-[80%] max-sm:flex max-sm:flex-col grid grid-cols-10 grid-rows-6 gap-5">
                <CourseList courses={courses} onStartCourse={onStartCourse} />

                <CourseActive courses={studentCourses} />

                <CourseCompleted courses={completedStudentCourses} />
            </div>
        </>
    );
}

export default CoursesPage;
