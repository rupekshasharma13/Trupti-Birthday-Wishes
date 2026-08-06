"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Sparkles, Trophy, Heart } from "lucide-react";
import confetti from "canvas-confetti";
import { GlassCard } from "@/components/ui/GlassCard";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

export const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    soundFX.playPop();
    soundFX.playSparkle();
    setIsOpen(true);

    // Trigger Canvas Confetti Blast
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#EC4899", "#8B5CF6", "#F5D061", "#E8B4B8", "#FFFFFF"],
      });
    } catch (e) {
      console.log("Confetti trigger error:", e);
    }
  };

  return (
    <section id="gift-box" className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4"
        >
          <Gift className="w-4 h-4 text-pink-400" />
          <span>Interactive Surprise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow mb-4"
        >
          {birthdayConfig.messages.giftSurpriseTitle}
        </motion.h2>

        <p className="text-sm sm:text-base text-pink-200/70 font-light">
          {!isOpen ? "Tap the gift box below to untie the ribbon!" : "Surprise unlocked!"}
        </p>
      </div>

      {/* Gift Box Container */}
      <div className="flex flex-col items-center">
        {!isOpen ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenGift}
            className="cursor-pointer relative w-64 h-64 sm:w-80 sm:h-80 flex flex-col items-center justify-center group"
          >
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-amber-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />

            {/* 3D Gift Box Visual */}
            <div className="relative z-10 w-full h-full glass-card border border-pink-500/40 rounded-3xl flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden bg-gradient-to-b from-white/10 to-pink-950/40">
              {/* Ribbon Vertical */}
              <div className="absolute inset-y-0 w-12 bg-gradient-to-r from-pink-500 via-amber-300 to-pink-500 shadow-md border-x border-white/20" />
              {/* Ribbon Horizontal */}
              <div className="absolute inset-x-0 h-12 bg-gradient-to-b from-pink-500 via-amber-300 to-pink-500 shadow-md border-y border-white/20" />

              {/* Bow Center */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-amber-300 via-pink-400 to-amber-300 border-4 border-white/60 shadow-[0_0_30px_rgba(245,208,97,0.8)] flex items-center justify-center"
              >
                <Sparkles className="w-12 h-12 text-white animate-spin" style={{ animationDuration: "8s" }} />
              </motion.div>

              <span className="relative z-20 mt-6 text-xs uppercase font-bold tracking-widest text-white drop-shadow-md bg-black/60 px-4 py-1.5 rounded-full border border-white/20">
                Tap to Unwrap 🎀
              </span>
            </div>
          </motion.div>
        ) : (
          /* Revealed Reward Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="w-full max-w-xl"
          >
            <GlassCard glowColor="gold" className="p-8 sm:p-12 text-center border-2 border-amber-400/40 relative overflow-hidden">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 p-1 shadow-lg flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0714] rounded-full flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-amber-300" />
                </div>
              </div>

              <span className="text-xs uppercase font-bold tracking-widest text-pink-300 block mb-2">
                {birthdayConfig.messages.giftSurpriseSubtitle}
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 text-glow">
                Surprise Revealed! 🎉
              </h3>

              <p className="text-base sm:text-xl font-serif text-pink-100/90 leading-relaxed mb-8">
                {birthdayConfig.messages.giftSurpriseContent}
              </p>

              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-full glass-pill border border-white/20 text-xs uppercase font-bold tracking-wider text-pink-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                Re-wrap Gift
              </button>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </section>
  );
};
