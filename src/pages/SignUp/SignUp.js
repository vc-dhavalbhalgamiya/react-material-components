import React from "react";
import { SignUpForm, SignUpFormWithIllustration } from "../../components";

const SignUp = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-50 dark:bg-gray-900">
          <SignUpForm />
        </div>
      </div> */}
      {/* Login 02 Form  start */}
      <div className="flex w-full items-center justify-center  mx-auto md:h-screen lg:py-0">
        <div className="flex justify-center items-center h-screen md:w-1/2 dark:bg-gray-900">
          <SignUpFormWithIllustration />
        </div>
        <div className="sm:hidden md:flex justify-center items-center h-screen w-1/2 bg-gray-50 dark:bg-gray-900">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="banner"
          />
        </div>
      </div>
      {/* Login 02 Form  end */}
    </>
  );
};

export default SignUp;
