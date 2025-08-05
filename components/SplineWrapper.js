"use client";
import dynamic from "next/dynamic";

// Dynamically import Spline with SSR disabled
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
});

const SplineWrapper = () => {
  return (
    <Spline scene="https://prod.spline.design/JuDyTwhow7tfBx00/scene.splinecode" />
  );
};

export default SplineWrapper;
