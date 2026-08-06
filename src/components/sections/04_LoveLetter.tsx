"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, Sparkles, RefreshCw, Stamp } from "lucide-react";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

export const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const letterRef = useRef<HTMLDivElement | null>(null);

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
        if (letterRef.current) {
          letterRef.current.scrollTop = letterRef.current.scrollHeight;
        }
      } else {
        setIsTypingComplete(true);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <section id="love-letter" className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      <div className="flex flex-col items-center text-center mb-12">
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
          className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow flex items-center justify-center flex-wrap gap-3"
        >
          <span>For Your Eyes Only</span>
          <Mail className="w-8 h-8 md:w-10 md:h-10 text-pink-400 fill-pink-500/30 animate-pulse inline-block" />
          <span>Letter for મારી વ્હાલી તૃપ્તિ 🌸</span>
        </motion.h2>

        <p className="text-sm sm:text-base text-pink-200/70 mt-2 font-light">
          {!isOpen ? "Tap the wax seal to open your letter" : "Reading your personal message..."}
        </p>
      </div>

      {/* Envelope & Letter Container */}
      <div className="relative w-full flex justify-center items-center">
        {!isOpen ? (
          /* Closed Envelope Interactive Widget */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              soundFX.playPaperRustle();
              setIsOpen(true);
            }}
            className="cursor-pointer relative w-full max-w-lg aspect-[1.5] rounded-3xl glass-card border border-pink-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-500"
          >
            {/* Envelope Triangle Flap Decor */}
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent clip-triangle border-b border-white/10 pointer-events-none" />

            {/* Glowing Wax Seal */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-1 shadow-[0_0_30px_rgba(236,72,153,0.5)] flex items-center justify-center border-2 border-white/40"
              >
                <div className="w-full h-full rounded-full bg-[#0B0714] flex flex-col items-center justify-center">
                  <Stamp className="w-8 h-8 text-amber-300" />
                </div>
              </motion.div>

              <span className="mt-4 text-xs font-semibold tracking-widest uppercase text-pink-200 flex items-center gap-1.5 group-hover:text-amber-300 transition-colors">
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                Tap to Open
              </span>
            </div>
          </motion.div>
        ) : (
          /* Opened Letter Slide-Out Container */
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl glass-card rounded-3xl p-8 sm:p-12 border border-pink-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Header Stamp */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-pink-300/70 font-semibold block">
                  Private & Confidential
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-300">
                  {birthdayConfig.messages.letterSubject}
                </h3>
              </div>
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>

            {/* Letter Body Text */}
            <div
              ref={letterRef}
              className="max-h-[50vh] overflow-y-auto pr-2 text-left font-serif text-lg sm:text-xl text-white/90 leading-relaxed space-y-4 whitespace-pre-wrap selection:bg-pink-500/30"
            >
              {typedText}
              {!isTypingComplete && (
                <span className="inline-block w-2 h-5 bg-pink-400 animate-pulse ml-1" />
              )}
            </div>

            {/* Re-read button */}
            {isTypingComplete && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 pt-4 border-t border-white/10 flex justify-end"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-pink-300 hover:text-white glass-pill hover:bg-white/10 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Close & Re-seal Letter
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
