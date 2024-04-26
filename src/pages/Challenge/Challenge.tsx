import { useEffect } from "react";
import ModalConfirmChallenge from "./components/ModalConfirmChallenge";
import useChallengeContext from "@/context/challengeContext";
import supabase from "@/supabaseClient";
import useStudentContext from "@/context/studentContext";

function ChallengePage() {
    const { student } = useStudentContext();
    const { isConfirmed, isOpened, updateIsOpened, resetChallengeState } = useChallengeContext();

    useEffect(() => {
        updateIsOpened(true);
    }, []);

    useEffect(() => {
        if (isConfirmed) {
            resetChallengeState();
            const fetchChallenge = async () => {
                const { data, error } = await supabase
                    .from("challenges")
                    .select("")
                    .not("user_ids", "in", student?.id)
                    .single();

                if (error) {
                    throw new Error(error.message);
                }

                console.log(data);
            };

            fetchChallenge();
        }

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isConfirmed]);

    if (isOpened) {
        return <ModalConfirmChallenge />;
    }

    return (
        <>
            <p>Daily Challenge</p>
        </>
    );
}

export default ChallengePage;
