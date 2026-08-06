"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glowColor?: "rose" | "gold" | "purple" | "none";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor = "rose",
  hoverEffect = true,
  ...props
}) => {
  const glowStyles = {
    rose: "hover:shadow-[0_0_40px_rgba(236,72,153,0.3)] hover:border-pink-500/30",
    gold: "hover:shadow-[0_0_40px_rgba(245,208,97,0.3)] hover:border-yellow-500/30",
    purple: "hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:border-purple-500/30",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        "relative rounded-3xl glass-card p-6 md:p-8 text-white transition-all duration-500 overflow-hidden",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle radial inner glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {children}
    </motion.div>
  );
};
