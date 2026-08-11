"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Quote, Heart, CheckCircle2, ArrowDown, Lock, ChevronUp } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

interface BirthdayMessageProps {
  isUnlocked?: boolean;
  onConfirmMessage?: () => void;
}

export const BirthdayMessage: React.FC<BirthdayMessageProps> = ({
  isUnlocked = true,
  onConfirmMessage,
}) => {
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

  const handleConfirmAndMoveToLetter = () => {
    soundFX.playSparkle();
    if (onConfirmMessage) {
      onConfirmMessage();
    }
    setTimeout(() => {
      const letterSection = document.getElementById("love-letter");
      if (letterSection) {
        letterSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <section id="birthday-message" className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      {!isUnlocked ? (
        /* Locked Section Card */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border-2 border-pink-500/30 text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 p-0.5 mb-6 shadow-[0_0_25px_rgba(236,72,153,0.5)]">
            <div className="w-full h-full rounded-full bg-[#0B0714] flex items-center justify-center">
              <Lock className="w-8 h-8 text-amber-300" />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-3">
            Birthday Wish Locked 🔒
          </h3>

          <p className="text-sm sm:text-base text-pink-200/90 max-w-md font-light leading-relaxed mb-8">
            Please begin the surprise story from the top section to unlock Trupti-Ji's birthday wish!
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill border border-pink-500/30 text-xs font-bold uppercase tracking-wider text-pink-200"
          >
            <ChevronUp className="w-4 h-4" />
            <span>Go to Top</span>
          </button>
        </motion.div>
      ) : (
        /* Unlocked Section Content */
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
              className="mt-10 pt-6 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-amber-300 font-serif font-semibold italic">
                <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                <span>Sending love today and always</span>
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
              </div>

              {/* Confirmation Button for Section 2 */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfirmAndMoveToLetter}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_35px_rgba(236,72,153,0.5)] border border-white/40 cursor-pointer"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-amber-300" />
                <span>I’ve Read the Birthday Wish — Next Chapter 🌸✨</span>
                <ArrowDown className="w-4 h-4 text-amber-300 animate-bounce" />
              </motion.button>
            </motion.div>
          </GlassCard>
        </motion.div>
      )}
    </section>
  );
};
