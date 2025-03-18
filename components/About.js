"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/moving-border";

const About = () => {
  return (
    <div className="bg-black" id="about">
      <LampContainer className="">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Adarsh Buhecha
        </motion.h1>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-lg font-semibold tracking-tight text-transparent md:text-md"
        >
          An enthusiastic and driven individual, I possess a creative mindset
          and adaptability. <br /> My goal is to contribute my expertise towards
          organizational advancement and <br /> collaborate effectively for
          mutual professional growth.
        </motion.p>
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-0 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-lg font-semibold tracking-tight text-transparent md:text-md"
        >
          <Button
            borderRadius="1.5rem"
            duration={5000}
            className="text-white bg-transparent"
          >
            My Resume
          </Button>
        </motion.p>
      </LampContainer>
    </div>
  );
};

export default About;
