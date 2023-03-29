import { Button, Checkbox, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Apple, Google } from "../../icons";

const LoginFormWithSocial = () => {
  const [passwordType, setPasswordType] = useState(false);
  const handlePassword = () => {
    setPasswordType(!passwordType);
  };
  return (
    <div className="xs:w-full lg:w-12/12 xl:w-8/12 shadow rounded-lg dark:border p-5 xl:p-7">
      <div className="flex items-start ">
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
        variant="h4"
        component="h1"
        className="flex items-start mt-2 font-bold text-gray-900  dark:text-white">
        Welcome back
      </Typography>
      <Typography
        variant="p"
        fontWeight="400"
        className=" flex items-start mt-1  text-gray-500 md:text-sm dark:text-white">
        Start your website in seconds. Don’t have an account? Sign up.
      </Typography>
      <form className="mt-8 mb-2 ">
        <div className="lg:flex items-center gap-4">
          <div className="my-4 md:w-full">
            <Input variant="outlined" label="Email" maxLength={5} />
          </div>
          <div className="my-4 md:w-full">
            <Input variant="outlined" label="Password" maxLength={5} />
          </div>
        </div>
      </form>
      <div class="relative flex pt-5 i  tems-center ">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">OR</span>
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div className=" mt-4 ">
        <Button
          variant="outlined"
          className="w-full mb-4 flex items-center justify-center">
          <span className="mr-2">
            <Google />
          </span>
          Sign in with Google
        </Button>
        <Button
          variant="outlined"
          className=" w-full flex items-center justify-center">
          <span className="mr-2">
            <Apple />
          </span>{" "}
          Sign in with Apple{" "}
        </Button>
      </div>
      <div className="flex justify-between items-center my-4">
        <div className="  flex content-center justify-between">
          <Checkbox className="p-0" label="Remember Me" />
        </div>
        <div className=" flex items-center justify-end  px-4 ">
          <a href="#" className="font-semibold no-underline text-black">
            Forgot your password?
          </a>
        </div>
      </div>
      <Button
        variant="contained"
        className=" w-full flex items-center justify-center">
        Sign In to your Account
      </Button>
    </div>
  );
};

export default LoginFormWithSocial;
