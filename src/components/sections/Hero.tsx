"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NeonButton from "../ui/NeonButton";
import Image from "next/image";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div style={{ y: y1, x: -50 }} className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
        <motion.div style={{ y: y2, x: 50 }} className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
              Shruti Dhameliya
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gradient leading-tight">
              Vision Beyond Reality
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Passionate about creating beautiful and functional digital experiences. Specializing in cloud technologies and modern web development.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="pt-4 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <NeonButton onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Work
            </NeonButton>
            <NeonButton variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </NeonButton>
          </motion.div>
        </div>

        {/* Right Content - Visuals */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-glow" />
            <div className="relative w-full h-full rounded-full border-2 border-white/10 glass-panel overflow-hidden p-2">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src="/profile.webp"
                  alt="Shruti Dhameliya"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating Status Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-4 -left-4 glass-panel px-4 py-2 rounded-full flex items-center gap-2 border-primary/30"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white">OpenToWork</span>
            </motion.div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
