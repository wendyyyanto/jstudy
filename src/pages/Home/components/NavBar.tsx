import useAuthContext from "@/context/authContext";
import { NavLink } from "react-router-dom";

function NavBar() {
    const { token } = useAuthContext();

    return (
        <section className="flex h-[120px] items-center justify-between px-[60px]">
            <NavLink to="/" className="text-h5-bold">
                JStudy.
            </NavLink>
            <div className="flex items-center gap-8">
                {!token && (
                    <>
                        <NavLink to={"/auth/signin"} className="text-h6-regular text-stroke-500 h-auto w-auto">
                            Masuk
                        </NavLink>
                        <NavLink
                            to={"/auth/signup"}
                            className="flex text-h6-regular text-stroke-500 bg-highlight-400 rounded-sm justify-center items-center h-[3.5rem] w-[7.6rem]"
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
