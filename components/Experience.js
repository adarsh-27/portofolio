import React from "react";
import {
  exp1,
  exp2,
  exp3,
  exp4,
  exp5,
  wordsExperience,
} from "@/constants/experience";
import { TracingBeam } from "./ui/tracing-beam";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { HoverEffect } from "./ui/expirencr-card-hover-effect";
import Image from "next/image";
import BackgroundGradient from "./ui/background-gradient";

const Experience = () => {
  return (
    <div>
      <div className="ml-96">
        <h1 className="heading mt-20">Experience.</h1>
        <TypewriterEffectSmooth words={wordsExperience} />
      </div>
      <div className="flex justify-between items-center">
        <TracingBeam>
          <HoverEffect items={exp5} />
          <HoverEffect items={exp4} />
          <HoverEffect items={exp3} />
          <HoverEffect items={exp2} />
          <HoverEffect items={exp1} />
        </TracingBeam>
      </div>
    </div>
  );
};

export default Experience;
