import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button, Chip, Typography } from "@material-tailwind/react";
import React from "react";
import { ProductHunt, Reddit, YouTube } from "../../icons";

const HeroSection = () => {
  return (
    <div className="py-7 container mx-auto">
      <a href="/" className="flex justify-center">
        <div className="p-3  border rounded-3xl bg:grey-900 dark:bg-gray-900">
          <Chip
            value={
              <Typography
                variant="small"
                color="white"
                className="font-medium capitalize leading-none">
                new
              </Typography>
            }
            color="blue"
            className="rounded-full py-1.5 mr-2"
          />
          Lorem Ipsum is simply dummy text
        </div>
      </a>
      <Typography variant="h1" className="pt-7 pb-5 font-bold">
        We invest in the world s potential
      </Typography>
      <Typography variant="h5" className="text-gray-500 font-normal">
        Here at Flowbite we focus on markets where technology, innovation, and{" "}
        <br />
        capital can unlock long-term value and drive economic growth.
      </Typography>
      <div className="flex justify-center py-8">
        <Button
          variant="contained"
          className="flex items-center mx-2 px-10 py-4 ">
          Learn More <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
        </Button>
        <Button
          variant="outlined"
          className="flex items-center mx-2 px-10 py-4">
          <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" /> Watch Video
        </Button>
      </div>
      <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
        <Typography variant="h5" className="text-gray-500 font-normal pt-7">
          Featured In
        </Typography>
        <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
          <a
            href="/"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <YouTube />
          </a>
          <a
            href="/"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <ProductHunt />
          </a>
          <a
            href="/"
            className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
            <Reddit />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
