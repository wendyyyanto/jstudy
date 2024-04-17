import illustration from "assets/illustration.svg";
import Button from "components/Button";
import Circle from "components/Circle";
import styled from "styled-components";

function Home() {
    return (
        <div className="w-screen h-screen overflow-hidden relative">
            <section className="flex h-[120px] items-center justify-between px-[60px]">
                <h5 className="text-h5-bold">JStudy.</h5>
                <div className="flex items-center gap-8">
                    <Button
                        height="auto"
                        width="auto"
                        classes="text-h6-regular text-stroke-200 h-auto w-auto"
                        text="Log-in"
                    />
                    <Button
                        height="3.5rem"
                        width="7.6rem"
                        text="Sign up"
                        classes="text-h6-regular text-stroke-500 bg-highlight-400"
                    />
                </div>
            </section>
            <section className="flex flex-col items-center mt-[11.4rem]">
                <h1 className="text-d2-bold text-stroke-600">
                    BEGIN WITH <span className="text-highlight-500">JAVASCRIPT</span>
                </h1>
                <p className="text-stroke-200 text-subheading-regular text-center w-[440px] mt-6">
                    Unleash your programming potential with JavaScript.
                </p>
                <Button
                    height="4rem"
                    width="16rem"
                    text="LEARN NOW"
                    classes="text-h5-bold text-stroke-500 bg-highlight-400 mt-6"
                />
            </section>
            <StyledImage src={illustration} alt="Landing Page Illustration" />
            <Circle top={20} left={-15} />
            <Circle bottom={-32} right={-20} />
        </div>
    );
}

const StyledImage = styled.img`
    position: absolute;
    bottom: 9.2%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -10;

    width: 50%;
    height: 50%;
`;

export default Home;
