"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function NeonButton({
  children,
  onClick,
  className = "",
  variant = "primary"
}: NeonButtonProps) {
  const baseColor = variant === "primary" ? "var(--color-primary)" : "var(--color-secondary)";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClick}
      className={`relative px-8 py-3 rounded-full font-semibold tracking-wide overflow-hidden group ${className}`}
      style={{
        background: "transparent",
        color: baseColor,
        border: `1px solid ${baseColor}`,
        boxShadow: `0 0 10px ${baseColor}20`
      }}
    >
      <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"
        style={{ boxShadow: `0 0 20px ${baseColor}` }}
      />
    </motion.button>
  );
}
