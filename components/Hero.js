"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import hero from "../public/hero.png";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const words = "Full Stack Developer";
  return (
    <div>
      <div className="h-screen relative w-screen flex flex-col justify-center items-center rounded-lg bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full  bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <div className="flex justify-between items-center w-4/6 px-20 z-20 relative">
          <div className="flex flex-col gap-4">
            <TextGenerateEffect
              words={words}
              duration={2}
              filter
              className="font-light"
            />
            <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
              Hello I&apos;m
            </h1>
            <h1
              className={cn(
                "md:text-5xl text-xl font-bold  relative z-20 text-cyan-500"
              )}
            >
              Adarsh Buhecha
            </h1>
            <div className="w-4/6">
              I am a full stack developer passionate about design, front-end
              development and back-end development. I thrive on creating
              Building visually stunning and functional web solutions.
              I seek to grow in a career driven by creativity and innovation.
            </div>
            <div className="flex gap-10">
              <div>
                <Button
                  borderRadius="1.5rem"
                  duration={5000}
                  className="text-white bg-transparent"
                >
                  About Me
                </Button>
              </div>

              <div>
                <Button
                  borderRadius="1.5rem"
                  duration={5000}
                  className="text-white bg-transparent"
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={hero}
              alt="Landscape picture"
              width={1000}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
