import Button from "components/Button";

function NavBar() {
    return (
        <section className="flex h-[120px] items-center justify-between px-[60px]">
            <h5 className="text-h5-bold">JStudy.</h5>
            <div className="flex items-center gap-8">
                <Button
                    height="auto"
                    width="auto"
                    classes="text-h6-regular text-stroke-500 h-auto w-auto"
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
    );
}

export default NavBar;
