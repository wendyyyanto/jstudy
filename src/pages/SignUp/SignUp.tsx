import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";

import supabase from "@/supabaseClient";

import Input from "components/Input";

import UserIcon from "assets/components/UserIcon";
import MailIcon from "assets/components/MailIcon";
import LockKeyIcon from "assets/components/LockKeyIcon";
import signUpIllustration from "assets/signup-illustration.svg";
import googleIcon from "assets/google.svg";

type Inputs = {
    username: string;
    email: string;
    password: string;
};

function SignUp() {
    const { handleSubmit, control } = useForm<Inputs>();

    const navigate = useNavigate();

    const { checkUserSessionAndNavigateToDashboard } = useAuth();

    useEffect(() => {
        checkUserSessionAndNavigateToDashboard();

        return () => {};
    });

    const onSubmit: SubmitHandler<Inputs> = async ({ username, email, password }) => {
        const { data: authData, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    username
                }
            }
        });

        if (error) {
            throw new Error(error.message);
        }

        console.log("Sign Up Success!", authData);

        navigate("/auth/signin");
    };

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <div className="w-[55vw] flex flex-col p-14 bg-highlight-200">
                <NavLink to={"/"} className="text-h5-bold">
                    JStudy
                </NavLink>

                <img className="mt-20 h-[60vh] w-[45vw]" src={signUpIllustration} alt="SignIn Illustration" />

                <p className="text-h2-bold mt-6">Create your account!</p>
                <p className="text-p2-regular text-para-300 mt-2">
                    And begin the journey to conquer programming with JavaScript!
                </p>
            </div>
            <div className="w-[45vw] flex flex-col p-20">
                <p className="text-h2-bold mt-20">Sign Up.</p>
                <p className="text-p2-regular text-para-300 mt-4">And begin the programming adventure!</p>

                <div className="flex flex-col mt-12 gap-3">
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)} id="signup-form">
                        <Controller
                            name="username"
                            control={control}
                            rules={{ required: "Username is required" }}
                            render={({ field: { onChange }, formState: { errors } }) => (
                                <Input
                                    inputName="username"
                                    inputType="text"
                                    icon={<UserIcon />}
                                    inputPlaceholder="username"
                                    errors={errors}
                                    onChange={onChange}
                                />
                            )}
                        />

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
                </div>

                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <button
                        type="submit"
                        form="signup-form"
                        className="bg-highlight-400 flex w-full justify-center items-center h-16 rounded-md cursor-pointer"
                    >
                        <p className="text-h6-semibold text-stroke-400">Sign Up</p>
                    </button>

                    <p className="text-stroke-400 text-p1-bold">Or</p>

                    <div className="bg-white flex gap-2 w-full justify-center items-center h-16 rounded-md">
                        <img src={googleIcon} alt="Google Icon" />
                        <p className="text-h6-semibold text-stroke-400">Google</p>
                    </div>

                    <p className="text-p2-semibold text-para-300">
                        Already have an account?{" "}
                        <NavLink to={"/auth/signin"} className="text-highlight-500">
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
