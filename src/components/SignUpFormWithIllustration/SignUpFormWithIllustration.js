import { Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const SignUpFormWithIllustration = () => {
  const [passwordType, setPasswordType] = useState(false);
  const handlePassword = () => {
    setPasswordType(!passwordType);
  };
  return (
    <>
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
            variant="h4"
            color="text-gray-900"
            className="font-bold pt-3 flex items-start  dark:text-white px-4 mb-0">
            Create a New account
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="px-4 mb-7">
              <Input label="Name" maxLength={19} />
            </div>
            <div className="px-4 mb-7">
              <Input label="Email" maxLength={19} />
            </div>
            <div className="px-4 mb-7">
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
            <div className="px-4 mb-7">
              <Input
                type={passwordType ? "password" : "text"}
                label="Confirm Password"
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

            <div className="px-4 mb-6">
              <button className="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold">
                Create a New Account
              </button>
            </div>
            <div className="text-gray-700">
              Already have an Account ? {""}
              <a href="#" className="font-semibold no-underline text-black">
                Login{" "}
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpFormWithIllustration;
