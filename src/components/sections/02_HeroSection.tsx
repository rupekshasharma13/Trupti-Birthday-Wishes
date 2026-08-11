"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Heart, Star } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";

interface HeroSectionProps {
  onBegin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBegin }) => {
  const [displayText, setDisplayText] = useState("");

  // Typewriter effect logic for single quote
  useEffect(() => {
    const currentString = birthdayConfig.messages.heroTyping[0];
    if (displayText.length < currentString.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentString.substring(0, displayText.length + 1));
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [displayText]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Background Aurora Blobs */}
      <div className="aurora-bg w-[500px] h-[500px] bg-pink-600/30 top-1/4 -left-32" />
      <div className="aurora-bg w-[400px] h-[400px] bg-purple-600/30 bottom-1/4 -right-32" style={{ animationDelay: "-5s" }} />
      <div className="aurora-bg w-[350px] h-[350px] bg-amber-500/20 top-1/3 right-1/4" style={{ animationDelay: "-9s" }} />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Floating Avatar Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8 group"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-[#0B0714] overflow-hidden border border-white/20 shadow-2xl">
            <img
              src={birthdayConfig.celebrant.avatarUrl}
              alt={birthdayConfig.celebrant.name}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src.endsWith(".png")) target.src = "/images/avatar.jpg";
                else if (!target.src.includes("unsplash")) target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
              }}
              className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2 p-2 rounded-full glass-pill bg-pink-500/30 border border-pink-400/40 text-amber-300 shadow-lg"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Date & Celebrant Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs md:text-sm font-semibold tracking-wider text-pink-300 mb-6 uppercase"
        >
          <Star className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>{birthdayConfig.celebrant.birthDate}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          <span>{birthdayConfig.celebrant.nickname}</span>
        </motion.div>

        {/* Breathtaking 2-Line Hero Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center justify-center font-serif font-extrabold tracking-tight mb-6"
        >
          <span className="text-3xl sm:text-5xl md:text-6xl text-gradient-rose-gold text-glow uppercase tracking-wider mb-2">
            HAPPY BIRTHDAY
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-amber-300 drop-shadow-[0_0_30px_rgba(245,208,97,0.8)] font-extrabold">
            TRUPTI JI 🌸
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="min-h-14 flex items-center justify-center mb-10 px-4"
        >
          <p className="text-lg sm:text-2xl font-light text-pink-100/95 font-serif italic max-w-2xl leading-relaxed">
            "{displayText}"
            <span className="animate-pulse text-amber-400 ml-1 font-normal">|</span>
          </p>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBegin}
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bold text-base md:text-lg shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:shadow-[0_0_60px_rgba(245,208,97,0.8)] border border-white/40 transition-all duration-300 cursor-pointer"
        >
          <Heart className="w-5 h-5 fill-pink-200 text-pink-200 group-hover:scale-125 transition-transform" />
          <span>Begin Surprise ✨</span>
          <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
};
