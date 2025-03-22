"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Button } from "./ui/moving-border";

const About = () => {
  return (
    <div id="about" className="w-screen min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden px-4 py-10 sm:px-10">
      <LampContainer className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium bg-gradient-to-br from-slate-300 to-white bg-clip-text text-transparent  mt-[-200px] sm:mt-0"
        >
          Adarsh Buhecha
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl"
        >
          An enthusiastic and driven individual, I possess a creative mindset and adaptability.
          My goal is to contribute my expertise towards organizational advancement and
          collaborate effectively for mutual professional growth.
        </motion.p>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
          className="mt-6"
        >
          <Button borderRadius="1.5rem" duration={5000} className="text-white bg-transparent px-6 py-2">
            My Resume
          </Button>
        </motion.div>
      </LampContainer>
    </div>
  );
};

export default About;
