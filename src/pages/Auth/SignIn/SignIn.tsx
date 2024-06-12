import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import supabase from "@/lib/supabaseClient";

import Input from "components/Input";

import useAuth from "@/lib/hooks/useAuth";

import signInIllustration from "assets/signin-illustration.svg";
import MailIcon from "assets/components/MailIcon";
import LockKeyIcon from "assets/components/LockKeyIcon";
import useAuthContext from "@/context/authContext";

type Inputs = {
    email: string;
    password: string;
};

function SignIn() {
    const { handleSubmit, control } = useForm<Inputs>();

    const navigate = useNavigate();

    const { showToast } = useAuth();

    const { setIsLoggedIn, setToken } = useAuthContext();

    const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            showToast("error", error.message);
            throw new Error(error.message);
        }

        setToken(data);

        setIsLoggedIn(true);
        showToast("success", "Login Success!");
        navigate("/dashboard");
    };

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <div className="w-[55vw] flex flex-col p-14 bg-highlight-200">
                <NavLink to={"/"} className="text-h5-bold">
                    JStudy
                </NavLink>

                <img
                    className="mt-20 max-2xl:h-[50vh] h-[60vh] w-[45vw]"
                    src={signInIllustration}
                    alt="SignIn Illustration"
                />

                <p className="text-h2-bold mt-6">Selamat datang!</p>
                <p className="text-p2-regular text-para-300 mt-2">
                    Mulai petualangan di dunia pemrograman bersama JavaScript!
                </p>
            </div>
            <div className="w-[45vw] flex flex-col p-20">
                <p className="text-h2-bold mt-20">Masuk.</p>
                <p className="text-p2-regular text-para-300 mt-4">Dan lanjutkan petualangan mu!</p>

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
                            rules={{ required: "Password is required", minLength: 6 }}
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

                    <p className="text-p2-semibold text-stroke-400 flex justify-end">Lupa password?</p>
                </div>

                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <button
                        type="submit"
                        form="signin-form"
                        className="bg-highlight-400 flex w-full justify-center items-center h-16 rounded-md cursor-pointer"
                    >
                        <p className="text-h6-semibold text-stroke-400">Masuk</p>
                    </button>

                    <p className="text-p2-semibold text-para-300">
                        Tidak memiliki akun?{" "}
                        <NavLink to={"/auth/signup"} className="text-highlight-500">
                            Daftar
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
