import styled from "styled-components";
import { stagger, useAnimate } from "framer-motion";

import useStudentContext from "@/context/studentContext";

import Achievements from "./components/Achievements";
import LearningProgress from "./components/LearningProgress";
import LastModuleInfo from "./components/Info/LastModuleInfo";
import RankInfo from "./components/Info/RankInfo";
import LevelInfo from "./components/Info/LevelInfo";
import PointInfo from "./components/Info/PointInfo";
import { useUpdateStudentSubscription } from "@/api/student/subscription";
import { useAchievementApi } from "@/api/achievement";
import { useEffect, useState } from "react";
import { Tables } from "@/types/database.types";
import useCoursesContext from "@/context/coursesContext";
import { useCoursesApi } from "@/api/courses";
import { useCourses } from "../Courses/hooks/useCourses";

function DashboardPage() {
    useUpdateStudentSubscription();

    const [scope, animate] = useAnimate();
    const staggerOptions = stagger(0.1, { startDelay: 0.15 });

    const { getStudentAchievements } = useAchievementApi();
    const { getLatestAccessedCourse } = useCoursesApi();

    const { studentCourses } = useCourses();

    const { student } = useStudentContext();
    const { setLastAccessedCourse, lastAccessedCourse } = useCoursesContext();

    const [achievementList, setAchievementList] = useState<Tables<"achievements">[] | null>(null);

    useEffect(() => {
        animate(
            "div#info-stagger",
            {
                opacity: 1,
                scale: 1
            },
            { duration: 0.2, delay: staggerOptions }
        );

        if (student) {
            fetchStudentAchievements(student);
            fetchLastAccessedCourse(student.id);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student]);

    const fetchStudentAchievements = async (student: Tables<"students">) => {
        const studentAchievements = await getStudentAchievements(student.achievements);
        setAchievementList(studentAchievements);
    };

    const fetchLastAccessedCourse = async (studentId: number) => {
        const latestCourse = await getLatestAccessedCourse(studentId);
        setLastAccessedCourse(latestCourse);
    };

    if (!student) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-5">Dashboard</h1>

            <div className="grid grid-cols-10 grid-rows-7 gap-5" ref={scope}>
                <div
                    id="info-stagger"
                    className="col-span-4 row-span-2 bg-highlight-300 rounded-sm flex flex-col px-8 py-6"
                >
                    <LastModuleInfo course={lastAccessedCourse} />
                </div>

                <div
                    id="info-stagger"
                    className="relative col-span-4 row-span-2 bg-stroke-900 rounded-sm flex items-center pl-10 gap-8 overflow-hidden"
                >
                    <RankInfo rank={student.rank} />
                </div>

                <div
                    id="info-stagger"
                    className="col-span-2 col-start-9 row-span-1 bg-secondary rounded-sm flex items-center gap-4 p-4"
                >
                    <LevelInfo level={student.level} />
                </div>

                <div
                    id="info-stagger"
                    className="col-span-2 col-start-9 row-span-1 bg-tertiary-500 rounded-sm flex items-center gap-4 p-4"
                >
                    <PointInfo points={student.points} />
                </div>

                <WhiteCard className="col-span-6 col-start-1 row-span-5">
                    <LearningProgress courses={studentCourses} />
                </WhiteCard>
                <WhiteCard className="col-span-4 row-span-5">
                    {achievementList && achievementList.length > 0 ? (
                        <Achievements achievements={achievementList} />
                    ) : (
                        <div id="info-stagger" className="flex flex-1 h-full justify-center items-center">
                            <p>Tidak ada Achievement</p>
                        </div>
                    )}
                </WhiteCard>
            </div>
        </>
    );
}

const WhiteCard = styled.div`
    background-color: #fffffe;
    border-radius: 10px;
    padding: 1.5rem 2rem;

    box-shadow: 1px 0px 10px -4px rgba(0, 0, 0, 0.25);
`;

export default DashboardPage;
