import { NavLink } from "react-router-dom";

import Input from "components/Input";

import UserIcon from "assets/components/UserIcon";
import MailIcon from "assets/components/MailIcon";
import LockKeyIcon from "assets/components/LockKeyIcon";
import signUpIllustration from "assets/signup-illustration.svg";
import googleIcon from "assets/google.svg";

function SignUp() {
    return (
        <div className="w-screen h-screen flex overflow-hidden">
            <div className="w-[55vw] flex flex-col p-14 bg-highlight-200">
                <NavLink to={"/"} className="text-h5-bold">
                    JStudy
                </NavLink>

                <img className="mt-20 h-[60vh] w-[45vw]" src={signUpIllustration} alt="SignIn Illustration" />

                <p className="text-h2-bold mt-6">Create your account!</p>
                <p className="text-subheading-regular text-para-300 mt-2">
                    And begin the journey to conquer programming with JavaScript!
                </p>
            </div>
            <div className="w-[45vw] flex flex-col p-20">
                <p className="text-h2-bold mt-20">Sign Up.</p>
                <p className="text-subheading-regular text-para-300 mt-4">And begin the programming adventure!</p>

                <div className="flex flex-col mt-12 gap-3">
                    <Input type="text" icon={<UserIcon />} placeholder="username" />
                    <Input type="email" icon={<MailIcon />} placeholder="you@example.com" />
                    <Input type="password" icon={<LockKeyIcon />} placeholder="At least 8 characters" />
                </div>

                <div className="flex flex-col gap-5 mt-8 justify-center items-center">
                    <div className="bg-highlight-400 flex w-full justify-center items-center h-16 rounded-md">
                        <p className="text-h6-semibold text-stroke-400">Sign Up</p>
                    </div>

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
