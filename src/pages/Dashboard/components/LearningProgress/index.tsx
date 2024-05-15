import LearningProgressItem from "./LearningProgressItem";
import { StudentCourses } from "@/types/types";

function LearningProgress({ courses }: { courses: StudentCourses }) {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Progres Belajar</p>
            <div className="grid grid-cols-2 gap-5 mt-6">
                {courses &&
                    courses.length > 0 &&
                    courses.map(
                        (course) =>
                            course && (
                                <LearningProgressItem
                                    key={course!.id}
                                    courseName={course!.course_title}
                                    progress={course!.progress}
                                    startedAt="2 days ago"
                                />
                            )
                    )}
            </div>
        </div>
    );
}

export default LearningProgress;
