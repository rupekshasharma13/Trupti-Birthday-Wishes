"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Sparkles, Heart, RefreshCw } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

export const BirthdayCake: React.FC = () => {
  // State for candles (true = glowing flame, false = blown out)
  const [candles, setCandles] = useState<boolean[]>([true, true, true]);
  const [isWishGranted, setIsWishGranted] = useState<boolean>(false);

  const handleExtinguishCandle = (index: number) => {
    if (!candles[index]) return;

    soundFX.playPop();
    const newCandles = [...candles];
    newCandles[index] = false;
    setCandles(newCandles);

    // If all candles blown out
    if (newCandles.every((c) => !c)) {
      soundFX.playFanfare();
      setTimeout(() => {
        setIsWishGranted(true);
      }, 500);
    }
  };

  const handleResetCandles = () => {
    setCandles([true, true, true]);
    setIsWishGranted(false);
  };

  return (
    <section id="birthday-cake" className="relative py-24 px-4 max-w-4xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Blow The Candles</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow mb-4"
        >
          {birthdayConfig.messages.cakeWishTitle}
        </motion.h2>

        <p className="text-sm sm:text-base text-pink-200/70 max-w-md font-light">
          {birthdayConfig.messages.cakeWishSubtitle}
        </p>
      </div>

      {/* Cake & Candles Container */}
      <div className="flex flex-col items-center">
        {/* Interactive Cake Illustration */}
        <div className="relative w-72 h-80 sm:w-96 sm:h-96 flex flex-col items-center justify-end mb-10">
          {/* Candles Top Layer */}
          <div className="absolute top-8 sm:top-12 z-30 flex items-center justify-center gap-8 sm:gap-12">
            {candles.map((isLit, idx) => (
              <div key={idx} className="relative flex flex-col items-center group cursor-pointer" onClick={() => handleExtinguishCandle(idx)}>
                {/* Flame */}
                <AnimatePresence>
                  {isLit ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.15, 0.95, 1], y: [0, -2, 1, 0] }}
                      exit={{ opacity: 0, y: -15, scale: 0.2 }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="relative w-6 h-10 flex items-center justify-center"
                    >
                      <div className="absolute w-6 h-9 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white blur-[2px] shadow-[0_0_20px_rgba(245,208,97,0.9)]" />
                      <div className="absolute w-2 h-4 rounded-full bg-white blur-[1px]" />
                    </motion.div>
                  ) : (
                    /* Smoke Puff */
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: [0.8, 0], y: [-5, -25], scale: [0.8, 1.6] }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="w-4 h-4 rounded-full bg-gray-400/50 blur-md mb-2"
                    />
                  )}
                </AnimatePresence>

                {/* Candle Stick */}
                <div className="w-4 h-16 sm:h-20 rounded-full bg-gradient-to-b from-pink-300 via-rose-400 to-purple-600 border border-white/30 shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-stripe-pattern opacity-30" />
                </div>
              </div>
            ))}
          </div>

          {/* Cake Tier Top */}
          <div className="relative z-20 w-48 sm:w-64 h-24 rounded-t-3xl glass-card border border-pink-400/40 bg-gradient-to-r from-pink-600/40 via-purple-600/40 to-pink-600/40 flex flex-col items-center justify-center shadow-lg">
            <div className="w-full h-4 bg-white/20 rounded-t-3xl border-b border-pink-300/30 flex justify-around">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-6 bg-pink-300/40 rounded-b-full" />
              ))}
            </div>
          </div>

          {/* Cake Tier Bottom */}
          <div className="relative z-10 w-64 sm:w-80 h-28 rounded-t-3xl glass-card border border-pink-400/40 bg-gradient-to-r from-purple-800/40 via-pink-700/40 to-purple-800/40 flex items-center justify-center shadow-2xl">
            <span className="font-serif font-bold text-amber-300 text-lg sm:text-xl tracking-wider text-glow">
              {birthdayConfig.celebrant.name}
            </span>
          </div>

          {/* Cake Stand Base */}
          <div className="w-72 sm:w-96 h-5 rounded-full bg-gradient-to-r from-amber-300 via-white to-amber-300 shadow-[0_10px_30px_rgba(245,208,97,0.5)] border border-amber-200" />
        </div>

        {/* Wish Granted Modal Reveal */}
        <AnimatePresence>
          {isWishGranted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="w-full max-w-lg"
            >
              <GlassCard glowColor="gold" className="p-8 text-center border-2 border-amber-400/50">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 p-1 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "6s" }} />
                </div>

                <h3 className="text-2xl font-serif font-bold text-amber-300 mb-3 text-glow">
                  Wish Sent To The Universe! ✨
                </h3>

                <p className="text-base sm:text-lg font-serif text-white/90 leading-relaxed mb-6">
                  {birthdayConfig.messages.cakeBlownMessage}
                </p>

                <button
                  onClick={handleResetCandles}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass-pill text-xs uppercase font-bold tracking-wider text-pink-200 hover:text-white transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Relight Candles
                </button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
