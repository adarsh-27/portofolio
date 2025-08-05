"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { Button } from "./ui/moving-border";
import hero from "../public/hero.png";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Spline from "@splinetool/react-spline/next";
import SplineWrapper from "./SplineWrapper";

const Hero = () => {
  const words = "Full Stack Developer";

  const handleScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="home">
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-black overflow-hidden relative px-4 py-10 sm:px-10">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto z-20">
          {/* Text Content */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <TextGenerateEffect
              words={words}
              duration={2}
              filter
              className="font-light"
            />
            <h1 className="text-xl sm:text-2xl md:text-4xl text-white">
              Hello I&apos;m
            </h1>
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-cyan-500">
              Adarsh Buhecha
            </h1>
            <p className="text-sm sm:text-base text-gray-300 max-w-xs sm:max-w-md mx-auto md:mx-0">
              I am a full stack developer passionate about design, front-end and
              back-end development. I thrive on creating visually stunning and
              functional web solutions. I seek to grow in a career driven by
              creativity and innovation.
            </p>
            <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-10 justify-center md:justify-start">
              <Button
                borderRadius="1.5rem"
                duration={5000}
                className="text-white bg-transparent"
                onClick={() => handleScroll("about")}
              >
                About Me
              </Button>
              <Button
                borderRadius="1.5rem"
                duration={5000}
                className="text-white bg-transparent px-6 py-2"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <SplineWrapper />
            {/* <Image
              src={hero}
              alt="Hero Image"
              width={400}
              height={300}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
