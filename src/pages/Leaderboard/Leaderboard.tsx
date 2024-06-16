import { useStudentApi } from "@/api/student";
import { Tables } from "@/types/database.types";
import { useEffect, useState } from "react";

function Leaderboard() {
    const { getStudentSortedByPoint } = useStudentApi();

    const [sortedStudents, setSortedStudents] = useState<Tables<"students">[] | null>(null);

    useEffect(() => {
        fetchSortedStudents();

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchSortedStudents = async () => {
        const students = await getStudentSortedByPoint();
        setSortedStudents(students);
    };

    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-10">Leaderboard</h1>
            <div className="max-sm:w-[750px] overflow-auto bg-stroke-800 rounded-md">
                <div className="flex flex-col gap-4 text-white py-4 pb-10 px-6 text-xl">
                    <div className="flex flex-1 gap-4 p-2 mt-6 bg-stroke-400 rounded-sm max-sm:text-p1-semibold max-sm:rounded-[5px] text-p2-semibold">
                        <span className="w-12 text-center">Rank</span>
                        <span className="flex-1 text-center">Player</span>
                        <span className="w-40 text-center">Points</span>
                    </div>
                    {sortedStudents ? (
                        sortedStudents.map((student, index) => (
                            <div className="flex gap-4">
                                <span className="w-16 h-16 max-sm:text-p2-semibold rounded-sm flex items-center justify-center bg-stroke-400">
                                    {index + 1}
                                </span>
                                <span className="flex flex-1 max-sm:text-p2-semibold rounded-sm px-4 items-center bg-stroke-500">
                                    {student.username}
                                </span>
                                <span className="w-44 max-sm:text-p2-semibold bg-stroke-600 rounded-sm flex items-center justify-center">
                                    {student.points} Pts
                                </span>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Leaderboard;
