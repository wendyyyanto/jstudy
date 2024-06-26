import styled from "styled-components";
import { useAnimate } from "framer-motion";

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
import { useStudentApi } from "@/api/student";
import { AuthSession } from "@supabase/supabase-js";
import useAuthContext from "@/context/authContext";

function DashboardPage() {
    useUpdateStudentSubscription();

    const [scope, animate] = useAnimate();

    const { getStudentAchievements } = useAchievementApi();
    const { getLatestAccessedCourse } = useCoursesApi();
    const { getStudent } = useStudentApi();

    const { studentCourses } = useCourses();

    const { student, setStudent } = useStudentContext();
    const { token } = useAuthContext();
    const { setLastAccessedCourse, lastAccessedCourse } = useCoursesContext();

    const [achievementList, setAchievementList] = useState<Tables<"achievements">[] | null>(null);

    useEffect(() => {
        animate(
            "#info-stagger",
            {
                opacity: 1,
                scale: 1
            },
            {
                type: "spring",
                duration: 0.1
            }
        );

        if (token) {
            fetchStudentDetails(token.session);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token, student?.id]);

    const fetchStudentDetails = async (session: AuthSession) => {
        const currentStudent = await getStudent(session.user.id);
        setStudent(currentStudent);
        await fetchStudentAchievements(currentStudent);
        await fetchLastAccessedCourse(currentStudent.id);
    };

    const fetchStudentAchievements = async (student: Tables<"students">) => {
        const studentAchievements = await getStudentAchievements(student.achievements);
        setAchievementList(studentAchievements);
    };

    const fetchLastAccessedCourse = async (studentId: number) => {
        const latestCourse = await getLatestAccessedCourse(studentId);
        setLastAccessedCourse(latestCourse);
    };

    if (!student || !token) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-5">Dashboard</h1>

            <div className="max-sm:flex max-sm:flex-col grid grid-cols-10 grid-rows-7 gap-5" ref={scope}>
                <div
                    id="info-stagger"
                    className="col-span-4 row-span-2 bg-highlight-300 rounded-sm flex flex-col px-8 py-6"
                >
                    <LastModuleInfo course={lastAccessedCourse} />
                </div>

                <div
                    id="info-stagger"
                    className="relative col-span-4 row-span-2 bg-stroke-900 rounded-sm flex items-center max-sm:py-6 pl-10 gap-8 overflow-hidden"
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
