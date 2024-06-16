import { CodeBlock, dracula } from "react-code-blocks";

import { Challenge } from "@/types/challenge";

function ChallengeQuestion({ challenge }: { challenge: Challenge }) {
    return (
        <>
            <p className="max-sm:text-p2-semibold text-h6-semibold mb-4">{challenge.question}</p>
            {challenge.snippet && <CodeBlock text={challenge.snippet} language="javascript" theme={dracula} />}
        </>
    );
}

export default ChallengeQuestion;
