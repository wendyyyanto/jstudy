import { useEffect } from "react";
import LearningProgressItem from "./LearningProgressItem";
import { StudentCourses } from "@/types/types";
import { stagger, useAnimate } from "framer-motion";

function LearningProgress({ courses }: { courses: StudentCourses }) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "div",
            {
                scale: 1,
                opacity: 1
            },
            { bounce: 0, type: "spring", delay: stagger(0.02, { startDelay: 0.4 }) }
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <p className="text-h5-semibold">Progres Belajar</p>
            <div ref={scope} className="grid grid-cols-2 gap-5 mt-6">
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
