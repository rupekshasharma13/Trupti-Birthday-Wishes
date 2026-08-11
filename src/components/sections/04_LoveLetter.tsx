"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, Sparkles, RefreshCw, Stamp, Camera, ArrowDown } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

interface LoveLetterProps {
  onLetterReadComplete?: () => void;
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ onLetterReadComplete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Typewriter effect inside the opened letter
  useEffect(() => {
    if (!isOpen) {
      setTypedText("");
      setIsTypingComplete(false);
      return;
    }

    const fullText = birthdayConfig.messages.letterText;
    let index = 0;
    setTypedText("");

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        if (onLetterReadComplete) {
          onLetterReadComplete();
        }
        clearInterval(interval);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [isOpen, onLetterReadComplete]);

  const handleOpenLetter = () => {
    soundFX.playPaperRustle();
    setIsOpen(true);

    // Smoothly keep user focused on the love letter section without page jump
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const handleGoToPhotos = () => {
    const gallerySection = document.getElementById("memories-gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} id="love-letter" className="relative py-20 px-4 max-w-4xl mx-auto z-10">
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

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow flex items-center justify-center flex-wrap gap-2.5"
        >
          <span>For Your Eyes Only</span>
          <Mail className="w-7 h-7 sm:w-9 sm:h-9 text-pink-400 fill-pink-500/30 animate-pulse inline-block" />
          <span>Letter for મારી વ્હાલી તૃપ્તિ 🌸</span>
        </motion.h2>

        <p className="text-sm sm:text-base text-pink-200/80 mt-3 font-light">
          {!isOpen ? "Tap the wax seal to open your letter" : "Reading your personal message..."}
        </p>
      </div>

      {/* Envelope & Letter Container with Stable Min-Height to Prevent Page Shift */}
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
            /* Opened Letter Slide-Out Container */
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

              {/* Letter Body Text with Enhanced Large Mobile Font & Line Spacing */}
              <div className="text-left font-serif text-lg sm:text-xl md:text-2xl text-pink-50 leading-relaxed sm:leading-loose tracking-wide whitespace-pre-wrap selection:bg-pink-500/40 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                {typedText}
                {!isTypingComplete && (
                  <span className="inline-block w-2.5 h-6 bg-pink-400 animate-pulse ml-1 align-middle rounded-sm shadow-[0_0_10px_#ec4899]" />
                )}
              </div>

              {/* Unlock Photo Collection CTA & Re-read button */}
              {isTypingComplete && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-10 pt-6 border-t border-pink-500/20 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <button
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-pink-300 hover:text-white glass-pill hover:bg-pink-500/20 transition-all border border-pink-500/30 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Close & Re-seal Letter
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleGoToPhotos}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-bold text-xs sm:text-sm shadow-[0_0_30px_rgba(236,72,153,0.5)] border border-white/30 cursor-pointer"
                  >
                    <Camera className="w-4 h-4 text-amber-300" />
                    <span>Explore Photo Collection 🌸</span>
                    <ArrowDown className="w-4 h-4 text-amber-300 animate-bounce" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
