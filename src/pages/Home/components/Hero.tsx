import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <section className="flex flex-col items-center mt-44 max-2xl:mt-32">
            <h1 className="text-d2-bold max-sm:text-h3-extrabold max-sm:text-center max-2xl:text-h1-bold text-stroke-600">
                MULAI DENGAN <span className="text-highlight-500">JAVASCRIPT</span>
            </h1>
            <p className="text-stroke-200 max-2xl:text-p2-regular text-subheading-regular text-center w-[400px] mt-6">
                Jelajahi dunia pemrograman dengan diawali bersama JavaScript.
            </p>
            <NavLink
                to={"/dashboard"}
                className="flex items-center justify-center text-h6-bold text-stroke-500 rounded-sm bg-highlight-400 mt-6 min-h-16 min-w-fit px-6 py-4"
            >
                MASUK KELAS
            </NavLink>
        </section>
    );
}

export default Hero;
