import Button from "@/components/Button";

function Hero() {
    return (
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
    );
}

export default Hero;
