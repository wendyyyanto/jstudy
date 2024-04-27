import Countdown, { CountdownRenderProps } from "react-countdown";
import ModalFinish from "./ModalFinish";
import { FiClock } from "react-icons/fi";

interface ICountdownChallengeProps {
    durations: number;
}

const renderer = ({ minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
        return (
            <>
                <p className="text-h6-bold">Finished!</p>
                <ModalFinish
                    headerText="Time is up!"
                    descriptionText="You failed the challenge because you can not finished the challenge within the given duration!"
                />
            </>
        );
    }

    return (
        <>
            <FiClock size={24} />
            <p className="text-h6-bold">
                {minutes} : {seconds}
            </p>
        </>
    );
};

function CountdownChallenge({ durations }: ICountdownChallengeProps) {
    return <Countdown date={Date.now() + durations * 1000} renderer={renderer}></Countdown>;
}

export default CountdownChallenge;
