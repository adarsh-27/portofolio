"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { HoverEffect } from "./ui/card-hover-effect";
import react from "../public/react.png";
import node from "../public/node.png";
import html from "../public/html.png";
import css from "../public/css.png";
import javascript from "../public/javaScript.png";
import typescript from "../public/typeScript2.png";
import next from "../public/nextjs.png";
import tailwind from "../public/tailWind.png";
import express from "../public/express.png";
import mongodb from "../public/mongodb.png";
import mysql from "../public/mysql.png";
import docker from "../public/docker.png";
import github from "../public/github.png";
import aws from "../public/aws.png";
import aceternityui from "../public/aceternityui.png";
import firebase from "../public/firebase.png";

const Skills = () => {
  const skills = [
    { id: 1, title: "HTML", image: html },
    { id: 2, title: "CSS", image: css },
    { id: 3, title: "JavaScript", image: javascript },
    { id: 4, title: "React JS", image: react },
    { id: 5, title: "TypeScript", image: typescript },
    { id: 6, title: "Next JS", image: next },
    { id: 7, title: "Tailwind", image: tailwind },
    { id: 8, title: "Node JS", image: node },
    { id: 9, title: "Express JS", image: express },
    { id: 10, title: "Mongo DB", image: mongodb },
    { id: 11, title: "My SQL", image: mysql },
    { id: 12, title: "Aceternity UI", image: aceternityui },
    { id: 13, title: "Github", image: github },
    { id: 14, title: "Docker", image: docker },
    { id: 15, title: "AWS", image: aws },
    { id: 16, title: "Fire Base", image: firebase },
  ];
  return (
    <div id="skills">
      <div className="">
          <h1 className="heading mb-5 text-center md:text-left md:ml-40">Skills.</h1>
        </div>
      <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={75}
            className="w-full h-full"
            particleColor="#06B6D1"
          />
        </div>

        <div>
          <HoverEffect items={skills} className="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
