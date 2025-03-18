"use client";
import React, { memo } from "react";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/constants/globe";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

// eslint-disable-next-line react/display-name
const WorldMap = memo(() => {
  return <World data={sampleArcs} globeConfig={globeConfig} />;
});

export default WorldMap;
