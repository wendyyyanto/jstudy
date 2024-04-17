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
    $top: $top,
    $right: $right,
    $bottom: $bottom,
    $left: $left
}))`
    position: absolute;
    top: ${(props) => props.$top + "%"};
    right: ${(props) => props.$right + "%"};
    left: ${(props) => props.$left + "%"};
    bottom: ${(props) => props.$bottom + "%"};
    transform: ${(props) => `translateX(${props.$right || props.$left}%)`};

    height: 60%;
    aspect-ratio: 1;
    background-color: rgba(255, 216, 3, 0.6);
    border-radius: 50%;

    z-index: -20;
`;

export default Circle;
