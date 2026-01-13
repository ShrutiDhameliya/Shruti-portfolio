"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseFollower() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200); // 200 is half the width/height
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: `radial-gradient(600px circle at ${springX.get()}px ${springY.get()}px, rgba(6, 182, 212, 0.05), transparent 40%)`
      }}
    >
      <motion.div
        className="absolute rounded-full opacity-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] blur-[80px]"
        style={{
          width: 400,
          height: 400,
          x: springX,
          y: springY,
        }}
      />
    </motion.div>
  );
}
