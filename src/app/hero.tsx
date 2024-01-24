"use client";

import Image from "next/image";
import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/hero4.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Image
            width={300}
            height={300}
            src="/image/cs-logo.svg"
          />
        <Typography
          variant="lead"
          className="mt-1 mb-12 text-xl font-bold text-white">
             Welcome to my stitching haven in the heart of Devon! 
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl">
         
          As your dedicated seamstress, I specialize in dress alterations, 
          clothing repairs, and sewing workshops. 
          Contact me for any sewing work you may need, 
          where creativity knows no bounds. 
          Experience the joy of tailored elegance with my bespoke services
        </Typography>
        <div className="flex items-center gap-4">
          <Button variant="gradient" color="white">
            Book an appointment
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
