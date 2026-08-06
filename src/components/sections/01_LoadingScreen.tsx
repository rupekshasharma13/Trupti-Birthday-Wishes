"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + Math.floor(Math.random() * 8) + 4;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0714] text-white p-6 overflow-hidden select-none"
    >
      {/* Background Aurora Glow */}
      <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-amber-500/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
        {/* Animated Icon Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="relative w-28 h-28 flex items-center justify-center rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-300 shadow-[0_0_50px_rgba(236,72,153,0.4)] mb-8"
        >
          <div className="w-full h-full bg-[#0B0714] rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 text-pink-400 fill-pink-500/30 animate-pulse" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-pink-300 text-sm tracking-widest uppercase font-semibold mb-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          Preparing Your Surprise...
          <Sparkles className="w-4 h-4 text-amber-300" />
        </motion.div>

        <h2 className="text-2xl font-serif font-bold text-white mb-6 text-glow">
          {birthdayConfig.celebrant.name}'s Celebration
        </h2>

        {/* Progress Bar Container */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-300 rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Percentage Counter */}
        <span className="mt-4 font-mono text-sm text-pink-200/80 font-bold">
          {Math.min(progress, 100)}%
        </span>
      </div>
    </motion.div>
  );
};
