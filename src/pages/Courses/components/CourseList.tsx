import styled from "styled-components";

import CourseItem from "./CourseItem";

import levelBeginner from "assets/level-beginner.svg";
import levelIntermediate from "assets/level-intermediate.svg";
import levelAdvanced from "assets/level-advanced.svg";

const levelIcon = {
    beginner: levelBeginner,
    intermediate: levelIntermediate,
    advanced: levelAdvanced
};

function CourseList() {
    return (
        <CourseListContainer className="col-span-7 row-span-full flex flex-col px-8 py-10 rounded-sm bg-white">
            <p className="text-h5-semibold">Daftar Kelas</p>

            <div className="grid grid-cols-2 gap-5 mt-4 pr-2 overflow-auto">
                <CourseItem
                    title="Introduction to JavaScript"
                    description="Consists of preparation material before you dive into the world of JavaScript"
                    icon={levelIcon.beginner}
                    level="Beginner"
                />
            </div>
        </CourseListContainer>
    );
}

const CourseListContainer = styled.div`
    box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

export default CourseList;
