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

const Experience = () => {
  return (
    <div id="experiences">
      <div className="">
        <h1 className="heading text-center md:text-left md:ml-40">Experience.</h1>
        <TypewriterEffectSmooth words={wordsExperience} 
        className=" justify-center md:ml-40 md:justify-start" />
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
