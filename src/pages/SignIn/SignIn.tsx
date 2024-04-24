import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

import Input from "components/Input";

import signInIllustration from "assets/signin-illustration.svg";
import MailIcon from "assets/components/MailIcon";
import LockKeyIcon from "assets/components/LockKeyIcon";
import googleIcon from "assets/google.svg";

type Inputs = {
    email: string;
    password: string;
};

function SignIn() {
    const { handleSubmit, control } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <div className="w-[55vw] flex flex-col p-14 bg-highlight-200">
                <NavLink to={"/"} className="text-h5-bold">
                    JStudy
                </NavLink>

                <img className="mt-20 h-[60vh] w-[45vw]" src={signInIllustration} alt="SignIn Illustration" />

                <p className="text-h2-bold mt-6">Welcome back!</p>
                <p className="text-p2-regular text-para-300 mt-2">
                    Start your programming journey, begin with JavaScript!
                </p>
            </div>
            <div className="w-[45vw] flex flex-col p-20">
                <p className="text-h2-bold mt-20">Sign In.</p>
                <p className="text-p2-regular text-para-300 mt-4">And begin the programming adventure!</p>

                <div className="flex flex-col mt-12 gap-3">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} id="signin-form">
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: "Email is required" }}
                            render={({ field: { onChange }, formState: { errors } }) => (
                                <Input
                                    inputName="email"
                                    inputType="email"
                                    icon={<MailIcon />}
                                    inputPlaceholder="you@example.com"
                                    errors={errors}
                                    onChange={onChange}
                                />
                            )}
                        />

                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: "Password is required" }}
                            render={({ field: { onChange }, formState: { errors } }) => (
                                <Input
                                    inputName="password"
                                    inputType="password"
                                    icon={<LockKeyIcon />}
                                    inputPlaceholder="At least 8 characters"
                                    errors={errors}
                                    onChange={onChange}
                                />
                            )}
                        />
                    </form>

                    <p className="text-p2-semibold text-stroke-400 flex justify-end">Forgot password?</p>
                </div>

                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <button
                        type="submit"
                        form="signin-form"
                        className="bg-highlight-400 flex w-full justify-center items-center h-16 rounded-md cursor-pointer"
                    >
                        <p className="text-h6-semibold text-stroke-400">Sign In</p>
                    </button>

                    <p className="text-stroke-400 text-p1-bold">Or</p>

                    <div className="bg-white flex gap-2 w-full justify-center items-center h-16 rounded-md cursor-pointer">
                        <img src={googleIcon} alt="Google Icon" />
                        <p className="text-h6-semibold text-stroke-400">Google</p>
                    </div>

                    <p className="text-p2-semibold text-para-300">
                        You don't have an account?{" "}
                        <NavLink to={"/auth/signup"} className="text-highlight-500">
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
