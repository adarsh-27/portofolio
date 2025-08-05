"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";

export default function PercentageLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2,
      onUpdate(value) {
        setProgress(Math.round(value));
      },
    });

    return () => controls.stop(); 
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center">
      <motion.p
        className="text-4xl font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {progress}%
      </motion.p>
    </div>
  );
}
