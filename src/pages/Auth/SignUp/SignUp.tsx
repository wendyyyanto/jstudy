import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

import useAuth from "@/lib/hooks/useAuth";

import supabase from "@/lib/supabaseClient";

import Input from "components/Input";

import UserIcon from "assets/components/UserIcon";
import MailIcon from "assets/components/MailIcon";
import LockKeyIcon from "assets/components/LockKeyIcon";
import signUpIllustration from "assets/signup-illustration.svg";
import { useStudentApi } from "@/api/student";
import { Tables } from "@/types/database.types";

type Inputs = {
    username: string;
    email: string;
    password: string;
};

function SignUp() {
    const { handleSubmit, control } = useForm<Inputs>();

    const navigate = useNavigate();

    const { getStudents } = useStudentApi();

    const { showToast } = useAuth();

    const [students, setStudents] = useState<Tables<"students">[] | null>(null);

    useEffect(() => {
        fetchStudents();

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchStudents = async () => {
        const students = await getStudents();

        setStudents(students);
    };

    const onSubmit: SubmitHandler<Inputs> = async ({ username, email, password }) => {
        if (!students) return;

        const isUsernameExist = students.filter((student) => student.username === username);

        if (isUsernameExist.length) {
            showToast("error", "Username already exist!");
            return;
        }

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
            showToast("error", error.message);
            throw new Error(error.message);
        }

        await supabase.from("students").insert({
            user_id: authData?.user?.id,
            achievements: [],
            username
        });

        showToast("success", "Sign Up Success!");
        navigate("/auth/signin");
    };

    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <div className="w-[55vw] flex flex-col p-14 bg-highlight-200">
                <NavLink to={"/"} className="text-h5-bold">
                    JStudy
                </NavLink>

                <img className="mt-20 h-[60vh] w-[45vw]" src={signUpIllustration} alt="SignIn Illustration" />

                <p className="text-h2-bold mt-6">Buat akun mu!</p>
                <p className="text-p2-regular text-para-300 mt-2">
                    Mulai petualangan untuk menaklukan dunia pemrograman bersama JavaScript!
                </p>
            </div>
            <div className="w-[45vw] flex flex-col p-20">
                <p className="text-h2-bold mt-20">Daftar.</p>
                <p className="text-p2-regular text-para-300 mt-4">Dan mulai petualangan pemrograman mu!</p>

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
                </div>

                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <button
                        type="submit"
                        form="signup-form"
                        className="bg-highlight-400 flex w-full justify-center items-center h-16 rounded-md cursor-pointer"
                    >
                        <p className="text-h6-semibold text-stroke-400">Daftar</p>
                    </button>

                    <p className="text-p2-semibold text-para-300">
                        Sudah memiliki akun?{" "}
                        <NavLink to={"/auth/signin"} className="text-highlight-500">
                            Masuk
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
