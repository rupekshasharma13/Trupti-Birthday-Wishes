"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Quote, Heart } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { birthdayConfig } from "@/config/birthday.config";

export const BirthdayMessage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="birthday-message" className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full glass-pill border border-pink-500/40 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
        >
          <HeartHandshake className="w-4 h-4 text-pink-400" />
          <span>Warmest Wishes</span>
        </motion.div>

        {/* High-Contrast Shimmer Header */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-gradient-rose-gold mb-10 text-glow leading-tight"
        >
          A Heartfelt Wish For Trupti Ji <span className="inline-block text-amber-300 drop-shadow-[0_0_15px_rgba(245,208,97,0.8)]">🌸</span>
        </motion.h2>

        {/* Ultra-Luxury Glowing Message Card */}
        <GlassCard glowColor="rose" className="w-full relative p-8 sm:p-12 md:p-14 border-2 border-pink-500/40 shadow-[0_0_60px_rgba(236,72,153,0.3)] overflow-hidden">
          {/* Floating Lotus Flowers Decor */}
          <div className="absolute top-4 left-5 text-xl pointer-events-none opacity-80 select-none">🌸</div>
          <div className="absolute top-4 right-5 text-xl pointer-events-none opacity-80 select-none">🪷</div>

          <Quote className="absolute top-6 left-6 w-12 h-12 text-pink-400/20 pointer-events-none" />
          <Quote className="absolute bottom-6 right-6 w-12 h-12 text-pink-400/20 rotate-180 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {birthdayConfig.messages.birthdayCardText.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-lg sm:text-2xl md:text-3xl font-serif text-pink-50 leading-relaxed font-normal tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 pt-6 border-t border-pink-500/20 flex items-center justify-center gap-3 text-sm sm:text-base text-amber-300 font-serif font-semibold italic drop-shadow-[0_0_12px_rgba(245,208,97,0.5)]"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Sending love & infinite joy today and always</span>
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
