"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { animate } from "framer-motion";

export default function GSAPPercentageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const textRefs = useRef([]);
  const [progress, setProgress] = useState(0);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // Fade both loading text and % from 90 to 100
  const fadingOpacity = progress < 90 ? 1 : 1 - (progress - 90) / 10;

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      onUpdate(value) {
        setProgress(Math.round(value));
      },
    });

    const timeline = gsap.timeline({ paused: true });

    // Slide loader out after fading
    timeline.to(loaderRef.current, {
      duration: 1,
      y: "100%",
      ease: "power4.out",
    });

    timeline.set(loaderRef.current, { zIndex: -1 });

    if (onComplete) {
      timeline.call(onComplete);
    }

    const timeout = setTimeout(() => {
      timeline.play();
    }, 3200);

    return () => {
      controls.stop();
      timeline.kill();
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black text-white overflow-hidden z-[100]"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Percentage text with dynamic opacity */}
        <p
          className="text-5xl font-bold tracking-wide transition-opacity duration-300"
          style={{ opacity: fadingOpacity }}
        >
          {progress}%
        </p>

        {/* Marquee loading text with fade */}
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap animate-marquee flex">
            {[...Array(3)].map((_, i) => (
              <h1
                key={i}
                ref={addToRefs}
                className="text-[80px] uppercase text-[#e0e0e0] mx-4 transition-opacity duration-300"
                style={{ opacity: fadingOpacity }}
              >
                loading
                <span
                  className="text-transparent mx-[10px]"
                  style={{ WebkitTextStroke: "1px #16BDD8" }}
                >
                  loading
                </span>
                loading
                <span
                  className="text-transparent mx-[10px]"
                  style={{ WebkitTextStroke: "1px #16BDD8" }}
                >
                  loading
                </span>
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
