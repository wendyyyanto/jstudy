import useAuthContext from "@/context/authContext";
import { NavLink } from "react-router-dom";

function NavBar() {
    const { token } = useAuthContext();

    return (
        <section className="flex h-[120px] items-center justify-between max-sm:px-8 px-[60px]">
            <NavLink to="/" className="max-sm:text-h6-semibold text-h5-bold">
                JStudy.
            </NavLink>
            <div className="flex items-center max-sm:gap-4 gap-8">
                {!token && (
                    <>
                        <NavLink
                            to={"/auth/signin"}
                            className="max-sm:text-p2-regular text-h6-regular text-stroke-500 h-auto w-auto"
                        >
                            Masuk
                        </NavLink>
                        <NavLink
                            to={"/auth/signup"}
                            className="flex max-sm:text-p2-regular text-h6-regular text-stroke-500 bg-highlight-400 rounded-sm justify-center items-center h-[3.5rem] max-sm:w-fit max-sm:h-fit max-sm:px-6 max-sm:py-2 max-sm:rounded-[5px] w-[7.6rem]"
                        >
                            Daftar
                        </NavLink>
                    </>
                )}
            </div>
        </section>
    );
}

export default NavBar;
