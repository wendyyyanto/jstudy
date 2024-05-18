import styled from "styled-components";
import BigCircle from "components/BigCircle";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import illustration from "assets/illustration.svg";
import { useEffect } from "react";
import useAuth from "@/lib/hooks/useAuth";

function Home() {
    const { handleOnSession } = useAuth();

    useEffect(() => {
        handleOnSession();

        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden relative">
            <NavBar />

            <Hero />

            <StyledImage src={illustration} alt="Landing Page Illustration" />
            <BigCircle top={20} left={-15} />
            <BigCircle bottom={-32} right={-20} />
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
