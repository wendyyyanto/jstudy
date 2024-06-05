import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Tables } from "@/types/database.types";
import CourseCompletedItem from "./CourseCompletedItem";

type StudentCourse = Tables<"student_courses"> | null;
type StudentCourses = StudentCourse[] | null;

interface ICourseCompletedProps {
    courses: StudentCourses;
}

dayjs.extend(relativeTime);

function CourseCompleted({ courses }: ICourseCompletedProps) {
    return (
        <div className="max-2xl:col-span-5 col-span-3 row-span-3 flex flex-col bg-highlight-200 rounded-sm px-8 py-10">
            <p className="text-h5-semibold">Sudah Lulus</p>

            <div className="flex flex-col gap-2 mt-4 pb-1 pr-2 overflow-auto">
                {courses &&
                    courses.map(
                        (course) =>
                            course && (
                                <CourseCompletedItem
                                    key={course.id}
                                    title={course.course_title}
                                    completedAt={dayjs(course.completed_at).format("DD-MM-YYYY")}
                                />
                            )
                    )}
                {courses && courses.length === 0 && <p>Tidak ada kelas</p>}
            </div>
        </div>
    );
}

export default CourseCompleted;
