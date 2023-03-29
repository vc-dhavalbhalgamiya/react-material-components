import React from "react";
import { LoginForm, LoginWithSocial, SignUpForm } from "../../components";
import LoginFormWithSocial from "../../components/LoginFormWithSocial";
const Login = () => {
  return (
    <>
      {/* Login 01 Form  start */}
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col justify-center items-center h-screen w-full bg-gray-50 dark:bg-gray-900">
          <LoginForm />
        </div>
      </div>

      {/* Login 01 Form  end */}

      {/* Login 02 Form  start */}
      <div className="flex w-full items-center justify-center  mx-auto md:h-screen lg:py-0">
        <div className="flex justify-center items-center h-screen md:w-1/2 dark:bg-gray-900">
          <LoginWithSocial />
        </div>
        <div className="sm:hidden md:flex justify-center items-center h-screen w-1/2 bg-gray-50 dark:bg-gray-900">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="banner"
          />
        </div>
      </div>
      {/* Login 02 Form  end */}
      {/* Login 03 Form  start */}
      <div className="flex w-full items-center justify-center  mx-auto md:h-screen lg:py-0">
        <div className="flex justify-center items-center h-screen md:w-1/2 dark:bg-gray-900">
          <LoginFormWithSocial />
        </div>
        <div className="hidden  xl:flex justify-center items-center h-screen w-1/2 bg-gray-50 dark:bg-gray-900">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="banner"
          />
        </div>
      </div>
      {/* Login 03 Form  end */}
    </>
  );
};

export default Login;
