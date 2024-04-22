import styled from "styled-components";

interface IButtonProps {
    text: string;
    rounded?: "small" | "medium" | "large";
    height: string;
    width: string;
    classes?: string;
}

function Button({ text, rounded = "small", height, width, classes }: IButtonProps) {
    const roundedValues = {
        small: "10px",
        medium: "15px",
        large: "20px"
    };

    return (
        <StyledButton $height={height} $width={width} $rounded={roundedValues[rounded]} className={classes}>
            {text}
        </StyledButton>
    );
}

const StyledButton = styled.button.attrs<{ $height: string; $width: string; $rounded?: string }>(
    ({ $height, $width, $rounded }) => ({
        $height,
        $width,
        $rounded
    })
)`
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    border-radius: ${(props) => props.$rounded};
`;

export default Button;
