import { Tables } from "@/types/database.types";
import CourseActiveItem from "./CourseActiveItem";

type StudentCourse = Tables<"student_courses"> | null;
type StudentCourses = StudentCourse[] | null;

interface ICourseActiveProps {
    courses: StudentCourses;
}

function CourseActive({ courses }: ICourseActiveProps) {
    return (
        <div className="col-span-3 row-span-3 flex flex-col bg-secondary rounded-sm px-8 py-10">
            <h1 className="text-h5-semibold">Kelas Aktif</h1>

            <div className="flex flex-col gap-2 mt-4 pr-2 overflow-auto">
                {courses &&
                    courses.map(
                        (course) =>
                            course && (
                                <CourseActiveItem
                                    key={course.id}
                                    title={course.course_title}
                                    courseAddress={course.last_module as string}
                                />
                            )
                    )}
                {courses && courses.length === 0 && <p>Tidak ada kelas aktif</p>}
            </div>
        </div>
    );
}

export default CourseActive;
