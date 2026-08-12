"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";

interface HeroSectionProps {
  onBegin: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBegin }) => {
  const [displayText, setDisplayText] = useState("");
  const [countdown, setCountdown] = useState(5);
  const [countdownDone, setCountdownDone] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentString = birthdayConfig.messages.heroTyping[0];
    if (displayText.length < currentString.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentString.substring(0, displayText.length + 1));
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [displayText]);

  // Countdown timer — starts after 1.2s (after hero animates in)
  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setTimeout(() => setCountdownDone(true), 400);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(startDelay);
  }, []);

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

        {/* Hero Main Title */}
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
            &ldquo;{displayText}&rdquo;
            <span className="animate-pulse text-amber-400 ml-1 font-normal">|</span>
          </p>
        </motion.div>

        {/* ── COUNTDOWN or BEGIN BUTTON ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col items-center gap-6"
        >
          <AnimatePresence mode="wait">
            {!countdownDone ? (
              <motion.div
                key="countdown"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-5"
              >
                {/* Label */}
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-pink-300/80 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase"
                >
                  ✨ &nbsp; Your surprise opens in &nbsp; ✨
                </motion.p>

                {/* Circular SVG Ring Timer */}
                <div className="relative flex items-center justify-center">
                  {/* Outer glow rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full border border-pink-500/20"
                      style={{ inset: `-${(i + 1) * 14}px` }}
                      animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.08, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                    />
                  ))}

                  {/* SVG Ring */}
                  <svg width="160" height="160" viewBox="0 0 160 160" className="absolute -rotate-90">
                    {/* Track */}
                    <circle cx="80" cy="80" r="68" fill="none" stroke="rgba(236,72,153,0.12)" strokeWidth="6" />
                    {/* Progress arc */}
                    <motion.circle
                      cx="80" cy="80" r="68"
                      fill="none"
                      stroke="url(#ringGrad)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 68}`}
                      strokeDashoffset={2 * Math.PI * 68 * (1 - countdown / 5)}
                      style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.8))" }}
                      transition={{ duration: 0.8, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Inner circle with number */}
                  <div
                    className="w-36 h-36 rounded-full flex flex-col items-center justify-center relative z-10"
                    style={{
                      background: "radial-gradient(circle at center, rgba(236,72,153,0.15), rgba(11,7,20,0.95))",
                      boxShadow: "0 0 40px rgba(236,72,153,0.3), inset 0 0 30px rgba(236,72,153,0.08)",
                      border: "1px solid rgba(236,72,153,0.25)",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={countdown}
                        initial={{ scale: 1.6, opacity: 0, y: -10 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.4, opacity: 0, y: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="font-serif font-extrabold leading-none"
                        style={{
                          fontSize: "4rem",
                          background: "linear-gradient(135deg, #F9A8D4, #F59E0B)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          filter: "drop-shadow(0 0 12px rgba(236,72,153,0.9))",
                        }}
                      >
                        {String(countdown).padStart(2, "0")}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-pink-400/40 text-[9px] tracking-[0.2em] uppercase font-bold mt-1">
                      seconds
                    </span>
                  </div>
                </div>

                {/* Floating emoji particles */}
                <div className="relative h-6 w-48 flex items-center justify-center">
                  {["🌸", "✨", "💕", "🪷", "💫"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="absolute text-sm select-none"
                      style={{ left: `${i * 22}%` }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* ── BEGIN SURPRISE BUTTON ── */
              <motion.div
                key="begin"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 220, damping: 15 }}
                className="flex flex-col items-center gap-4"
              >
                {/* Burst particles on reveal */}
                {["🌸","✨","💕","🪷","⭐","💫","🌺","🎉"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-lg pointer-events-none select-none"
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: 0,
                      scale: [0, 1.5, 0.8],
                      x: Math.cos((i / 8) * Math.PI * 2) * 80,
                      y: Math.sin((i / 8) * Math.PI * 2) * 80,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
                  >
                    {emoji}
                  </motion.span>
                ))}

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-amber-300/70 text-xs font-bold tracking-widest uppercase"
                >
                  🎉 &nbsp; Ready for you &nbsp; 🎉
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={onBegin}
                  className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-base md:text-lg border border-white/30 transition-all duration-300 cursor-pointer overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #EC4899, #F43F5E, #F59E0B)",
                    boxShadow: "0 0 50px rgba(236,72,153,0.7), 0 0 100px rgba(236,72,153,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  {/* Animated shimmer */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                  />
                  {/* Outer pulse ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-pink-300/40"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                  <Heart className="w-5 h-5 fill-pink-200 text-pink-200 group-hover:scale-125 transition-transform relative z-10" />
                  <span className="relative z-10">Begin Surprise ✨</span>
                  <Sparkles className="w-5 h-5 text-amber-200 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
