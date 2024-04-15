import styled from "styled-components";

interface ICircleProps {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

function Circle({ top, right, left, bottom }: ICircleProps) {
    return (
        <>
            <CircleElement $top={top} $right={right} $bottom={bottom} $left={left} />
        </>
    );
}

const CircleElement = styled.div.attrs<{
    $top?: number | string;
    $right?: number | string;
    $bottom?: number | string;
    $left?: number | string;
}>(({ $top, $right, $bottom, $left }) => ({
    $top: `${$top}%` || "auto",
    $right: `${$right}%` || "auto",
    $bottom: `${$bottom}%` || "auto",
    $left: `${$left}%` || "auto"
}))`
    position: absolute;
    top: ${(props) => props.$top};
    right: ${(props) => props.$right};
    left: ${(props) => props.$left};
    bottom: ${(props) => props.$bottom};

    height: 27.93rem;
    width: 27.93rem;
    background-color: rgba(255, 216, 3, 0.6);
    border-radius: 50%;

    z-index: -999;
`;

export default Circle;
