import styled from "styled-components";

import CourseItem from "./CourseItem";

import levelEasy from "assets/level-beginner.svg";
import levelMedium from "assets/level-intermediate.svg";
import levelHard from "assets/level-advanced.svg";
import { useCourses } from "../hooks/useCourses";

const levelIcon = {
    Easy: levelEasy,
    Medium: levelMedium,
    Hard: levelHard
};

function CourseList() {
    const { courses, onStartCourse } = useCourses();

    return (
        <CourseListContainer className="col-span-7 row-span-full flex flex-col px-8 py-10 rounded-sm bg-white">
            <p className="text-h5-semibold">Daftar Kelas</p>

            <div className="grid grid-cols-2 gap-5 mt-4 pr-2 overflow-auto">
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
                    <p>Memuat Kelas...</p>
                )}
            </div>
        </CourseListContainer>
    );
}

const CourseListContainer = styled.div`
    box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

export default CourseList;
