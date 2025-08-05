"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import Spline with SSR disabled
const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
  ssr: false,
  loading: () => <div>Loading 3D...</div>,
});

const SplineWrapper = () => {
  return (
    <Suspense fallback={<div>Loading 3D...</div>}>
      <Spline scene="https://prod.spline.design/L6e17vNFMUdCZTFa/scene.splinecode" />
      {/* <Spline scene="https://prod.spline.design/fh879mLinO9AkUad/scene.splinecode" /> */}
    </Suspense>
  );
};

export default SplineWrapper;
