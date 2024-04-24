import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <section className="flex h-[120px] items-center justify-between px-[60px]">
            <h5 className="text-h5-bold">JStudy.</h5>
            <div className="flex items-center gap-8">
                <NavLink to={"/auth/signin"} className="text-h6-regular text-stroke-500 h-auto w-auto">
                    Log-in
                </NavLink>
                <NavLink
                    to={"/auth/signup"}
                    className="flex text-h6-regular text-stroke-500 bg-highlight-400 rounded-sm justify-center items-center h-[3.5rem] w-[7.6rem]"
                >
                    Sign-Up
                </NavLink>
            </div>
        </section>
    );
}

export default NavBar;
