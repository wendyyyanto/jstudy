import styled from "styled-components";

import CourseItem from "./CourseItem";

import levelEasy from "assets/level-beginner.svg";
import levelMedium from "assets/level-intermediate.svg";
import levelHard from "assets/level-advanced.svg";
import { Tables } from "@/types/database.types";
import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

type Course = Tables<"courses"> | null;
type Courses = Course[] | null;

interface ICourseListProps {
    courses: Courses;
    onStartCourse: (slug: string) => void;
}

const levelIcon = {
    Easy: levelEasy,
    Medium: levelMedium,
    Hard: levelHard
};

function CourseList({ courses, onStartCourse }: ICourseListProps) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            "div#course-item",
            {
                opacity: 1,
                scale: 1
            },
            {
                bounce: 0,
                type: "spring",
                duration: 0.5,
                delay: stagger(0.1, { startDelay: 0.4 })
            }
        );

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [courses]);

    return (
        <CourseListContainer className="max-2xl:col-span-10 col-span-7 row-span-full flex flex-col px-8 py-10 rounded-sm bg-white">
            <p className="text-h5-semibold">Daftar Kelas</p>

            <div ref={scope} className="max-sm:flex grid grid-cols-2 gap-5 mt-4 pr-2 overflow-auto">
                {courses ? (
                    courses.map(
                        (course) =>
                            course && (
                                <CourseItem
                                    key={course.slug}
                                    title={course.title}
                                    description={course.description}
                                    icon={levelIcon[course.difficulty]}
                                    level={course.difficulty}
                                    link={course.start_address}
                                    onStartCourse={() => onStartCourse(course.slug)}
                                />
                            )
                    )
                ) : (
                    <div id="course-item">Memuat Kelas...</div>
                )}
            </div>
        </CourseListContainer>
    );
}

const CourseListContainer = styled.div`
    box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

export default CourseList;
