"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, Sparkles, RefreshCw, Stamp, CheckCircle2, ArrowDown, Lock } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

interface LoveLetterProps {
  isUnlocked?: boolean;
  onLetterReadComplete?: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ isUnlocked = true, onLetterReadComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleOpenLetter = () => {
    soundFX.playPaperRustle();
    setIsOpen(true);
  };

  const handleConfirmReadAndMoveForward = () => {
    soundFX.playSparkle();
    if (onLetterReadComplete) {
      onLetterReadComplete();
    }
    setTimeout(() => {
      const gallerySection = document.getElementById("memories-gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handleGoToWish = () => {
    const wishSection = document.getElementById("birthday-message");
    if (wishSection) {
      wishSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="love-letter" className="relative py-20 px-4 max-w-4xl mx-auto z-10">
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
            Love Letter Locked 🔒
          </h3>

          <p className="text-sm sm:text-base text-pink-200/90 max-w-md font-light leading-relaxed mb-8">
            Please confirm reading the Birthday Wish card above to unlock Trupti-Ji's Love Letter!
          </p>

          <button
            onClick={handleGoToWish}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill border border-pink-500/30 text-xs font-bold uppercase tracking-wider text-pink-200"
          >
            <Mail className="w-4 h-4" />
            <span>Go to Birthday Wish</span>
          </button>
        </motion.div>
      ) : (
        /* Unlocked Section Content */
        <div>
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4"
            >
              <Mail className="w-4 h-4 text-pink-400" />
              <span>A Special Letter</span>
            </motion.div>

            {/* High-Contrast, Bright Title with Crystal-Clear Gujarati Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-2"
            >
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow flex items-center justify-center gap-2.5">
                <span>For Your Eyes Only</span>
                <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-pink-400 fill-pink-500/30 animate-pulse inline-block" />
              </h2>

              <div className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-pink-100 tracking-wide drop-shadow-[0_0_20px_rgba(236,72,153,0.9)] mt-1">
                Letter for <span className="text-amber-300 font-extrabold drop-shadow-[0_0_15px_rgba(245,208,97,0.8)]">મારી વ્હાલી તૃપ્તિ 🌸</span>
              </div>
            </motion.div>

            <p className="text-sm sm:text-base text-pink-200/90 mt-4 font-light">
              {!isOpen ? "Tap the wax seal to open your letter" : "Take your time reading your personal message..."}
            </p>
          </div>

          {/* Envelope & Letter Container */}
          <div className="relative w-full flex justify-center items-center min-h-[480px]">
            <AnimatePresence mode="wait">
              {!isOpen ? (
                /* Closed Envelope Interactive Widget */
                <motion.div
                  key="closed-envelope"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleOpenLetter}
                  className="cursor-pointer relative w-full max-w-lg aspect-[1.5] rounded-3xl glass-card border border-pink-500/40 shadow-[0_15px_40px_rgba(236,72,153,0.3)] overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-500"
                >
                  {/* Envelope Triangle Flap Decor */}
                  <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent clip-triangle border-b border-white/10 pointer-events-none" />

                  {/* Glowing Wax Seal */}
                  <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ repeat: Infinity, duration: 2.5 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-1 shadow-[0_0_35px_rgba(236,72,153,0.6)] flex items-center justify-center border-2 border-white/40"
                    >
                      <div className="w-full h-full rounded-full bg-[#0B0714] flex flex-col items-center justify-center">
                        <Stamp className="w-8 h-8 text-amber-300" />
                      </div>
                    </motion.div>

                    <span className="mt-4 text-xs font-bold tracking-widest uppercase text-pink-200 flex items-center gap-1.5 group-hover:text-amber-300 transition-colors">
                      <Heart className="w-4 h-4 fill-pink-400 text-pink-400" />
                      Tap to Open
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Opened Letter Container - Displays Full Letter Immediately */
                <motion.div
                  key="opened-letter"
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-2xl glass-card rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-pink-500/40 shadow-[0_0_50px_rgba(236,72,153,0.3)] relative overflow-hidden"
                >
                  {/* Header Stamp */}
                  <div className="flex items-center justify-between border-b border-pink-500/20 pb-5 mb-6">
                    <div className="text-left">
                      <span className="text-[11px] sm:text-xs uppercase tracking-widest text-pink-300/80 font-bold block mb-1">
                        Private & Confidential
                      </span>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-amber-300 drop-shadow-[0_2px_8px_rgba(245,208,97,0.4)]">
                        {birthdayConfig.messages.letterSubject}
                      </h3>
                    </div>
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-pink-400 animate-pulse" />
                  </div>

                  {/* Full Letter Body Text Displayed Instantly */}
                  <div className="text-left font-serif text-lg sm:text-xl md:text-2xl text-pink-50 leading-relaxed sm:leading-loose tracking-wide whitespace-pre-wrap selection:bg-pink-500/40 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {birthdayConfig.messages.letterText}
                  </div>

                  {/* Confirmation Button at Bottom of Full Letter */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 pt-6 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-pink-300 hover:text-white glass-pill hover:bg-pink-500/20 transition-all border border-pink-500/30 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Re-seal Letter
                    </button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleConfirmReadAndMoveForward}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_35px_rgba(236,72,153,0.6)] border border-white/40 cursor-pointer"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-amber-300" />
                      <span>I’ve Read the Love Letter — Move Forward 🌸✨</span>
                      <ArrowDown className="w-4 h-4 text-amber-300 animate-bounce" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </section>
  );
};
