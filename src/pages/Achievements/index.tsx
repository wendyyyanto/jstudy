import AchievementItem from "./components/AchievementItem";

function AchievementsPage() {
    return (
        <>
            <h1 className="text-h2-semibold text-stroke-600 mb-10">Achievements</h1>

            <div className="h-[75%] flex flex-col gap-8 pr-10 overflow-auto">
                <AchievementItem
                    title="HELLO, WORLD"
                    number={1}
                    description="successfully finish the “Introduction to JavaScript” course. With this you are ready for the
        next step to continue your programming journey with JavaScript"
                />
            </div>
        </>
    );
}

export default AchievementsPage;
