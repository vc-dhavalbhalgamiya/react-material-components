import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const LoginWithSocial = () => {
  const [passwordType, setPasswordType] = useState(false);
  const handlePassword = () => {
    setPasswordType(!passwordType);
  };
  return (
    <div className="rounded-lg dark:border md:mt-0 md:w-9/12 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 md:p-8">
        <div className="flex items-start px-4">
          <a
            href="#"
            class="inline-flex items-start text-2xl font-semibold text-gray-900 dark:text-white ">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
        </div>
        <Typography
          variant="h1"
          className=" px-4 flex items-start mt-2 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </Typography>
        <h6 className="px-4 flex items-start mt-1 text-sm  leading-tight tracking-tight text-gray-500 md:text-sm dark:text-white mt-0">
          or Start Your 14 Days Trial
        </h6>

        <h5 className="px-4 flex items-start mt-3  font-bold  text-sm  leading-tight tracking-tight text-gray-900 md:text-sm dark:text-white mt-0">
          Sign in With
        </h5>
        <div className="flex mt-4 px-4">
          <Button variant="outlined">FaceBook</Button>
          <Button variant="outlined" className="mx-4">
            Google{" "}
          </Button>
          <Button variant="outlined">Twitter</Button>
        </div>
        <div class="relative flex pt-5 px-4 items-center sm:w-96">
          <div class="flex-grow border-t border-gray-400"></div>
          <span class="flex-shrink mx-4 text-gray-400">OR</span>
          <div class="flex-grow border-t border-gray-400"></div>
        </div>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="px-4 mb-7">
            <Input label="Email" maxLength={19} />
          </div>
          <div className="px-4 mb-3">
            <Input
              type={passwordType ? "password" : "text"}
              label="Password"
              className="border border-gray rounded w-full p-3"
              icon={
                !passwordType ? (
                  <EyeIcon
                    className="h-5 w-5 text-blue-gray-300"
                    onClick={handlePassword}
                  />
                ) : (
                  <EyeSlashIcon
                    onClick={handlePassword}
                    className="h-5 w-5 text-blue-gray-300"
                  />
                )
              }
            />
          </div>
          <div className=" flex items-center justify-end w-full px-4 ">
            <a href="#" className="font-semibold no-underline text-black">
              Forgot your password?
            </a>
          </div>
          <div className="px-4 mb-4 flex content-center justify-between">
            <Checkbox className="p-0" label="Remember Me" />
          </div>
          <div className="px-4 mb-6">
            <button className="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
              Sign in
            </button>
          </div>
          <div className="text-gray-700">
            Don't have a account?
            <a href="#" className="font-semibold no-underline text-black">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWithSocial;
