import BigCircle from "components/BigCircle";
import { motion } from "framer-motion";

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

            <motion.img
                initial={{ scale: 0.5, x: "-50%" }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-[9%] left-1/2 -z-10 w-1/2 h-1/2 max-2xl:w-[45%] max-2xl:h-[45%]"
                src={illustration}
                alt="Landing Page Illustration"
            />
            <BigCircle top={20} left={-15} />
            <BigCircle bottom={-32} right={-20} />
        </div>
    );
}

// const StyledImage = styled.img`
//     position: absolute;
//     bottom: 9.2%;
//     left: 50%;
//     transform: translateX(-50%);
//     z-index: -10;

//     width: 50%;
//     height: 50%;

//     @media screen and (max-width: 1536px) {
//         width: 45%;
//         height: 45%;
//     }
// `;

export default Home;
