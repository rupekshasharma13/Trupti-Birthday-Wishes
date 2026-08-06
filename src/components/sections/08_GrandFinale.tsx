"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, PartyPopper, RotateCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { GlassCard } from "@/components/ui/GlassCard";
import { birthdayConfig } from "@/config/birthday.config";
import { soundFX } from "@/utils/sound";

interface GrandFinaleProps {
  onReplay: () => void;
}

export const GrandFinale: React.FC<GrandFinaleProps> = ({ onReplay }) => {
  const [hasCelebrated, setHasCelebrated] = useState(false);

  const triggerGrandFireworks = () => {
    setHasCelebrated(true);
    soundFX.playFanfare();
    soundFX.playSparkle();

    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      try {
        // Fireworks from left and right edges
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: { x: randomInRange(0.1, 0.4), y: Math.random() - 0.2 },
          colors: ["#EC4899", "#8B5CF6", "#F5D061", "#E8B4B8", "#FFFFFF"],
        });
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          origin: { x: randomInRange(0.6, 0.9), y: Math.random() - 0.2 },
          colors: ["#EC4899", "#8B5CF6", "#F5D061", "#E8B4B8", "#FFFFFF"],
        });
      } catch (e) {
        console.log("Fireworks error:", e);
      }
    }, 250);
  };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  return (
    <section id="grand-finale" className="relative py-28 px-4 max-w-5xl mx-auto z-10 text-center">
      {/* Background Aurora Radial */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/20 via-purple-600/20 to-amber-400/20 rounded-full blur-[140px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill border border-amber-400/40 text-xs font-bold uppercase tracking-widest text-amber-300 mb-6 shadow-lg">
          <PartyPopper className="w-4 h-4 text-amber-400" />
          <span>The Grand Climax</span>
        </div>

        {/* Crisp Header Title with Clear Emojis */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white text-glow mb-6 leading-tight">
          <span className="text-gradient-rose-gold">HAPPY BIRTHDAY TRUPTI JI!</span>{" "}
          <span className="inline-block drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">🌸🎉</span>
        </h2>

        <p className="text-lg sm:text-2xl font-serif text-pink-100/90 max-w-2xl font-light mb-12">
          {birthdayConfig.messages.finaleSubtitle}
        </p>

        {/* Celebrate Big Trigger Button */}
        {!hasCelebrated ? (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerGrandFireworks}
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-amber-400 text-white font-bold text-xl sm:text-2xl shadow-[0_0_50px_rgba(236,72,153,0.6)] hover:shadow-[0_0_80px_rgba(245,208,97,0.8)] border border-white/40 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <Sparkles className="w-7 h-7 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
            <span>CELEBRATE NOW!</span>
            <PartyPopper className="w-7 h-7 text-amber-300 group-hover:rotate-12 transition-transform" />
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-2xl"
          >
            <GlassCard glowColor="rose" className="p-8 sm:p-12 border-2 border-pink-400/50">
              <div className="flex items-center justify-center gap-2 mb-6 text-amber-300">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 fill-pink-500 text-pink-500 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>

              {/* Custom Heartfelt Gujarati Post-Celebration Message */}
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-6 leading-relaxed">
                મારી ખુશી, મારી તાકાત, મારા જીવનનો સુંદર સહારો અને મારી સૌથી ખાસ વ્યક્તિ બનવા માટે તમારો દિલથી આભાર. ✨
              </h3>

              <p className="text-base sm:text-lg font-serif text-pink-200/90 leading-relaxed mb-8">
                તમારા જીવનનો દરેક અધ્યાય અનંત સ્મિતો, સુંદર આશ્ચર્યોથી અને એવી જ ખુશીઓથી ભરેલો રહે, જે રીતે તમે મારા જીવનને પ્રેમ અને આનંદથી ભરી દીધું છે. ❤️
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={triggerGrandFireworks}
                  className="px-6 py-3 rounded-full glass-button text-sm font-semibold text-white flex items-center gap-2 cursor-pointer"
                >
                  <PartyPopper className="w-4 h-4 text-amber-300" />
                  More Fireworks!
                </button>

                <button
                  onClick={onReplay}
                  className="px-6 py-3 rounded-full glass-pill border border-white/20 text-sm font-semibold text-pink-200 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Replay Journey
                </button>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </motion.div>

      {/* Customized Footer Branding */}
      <div className="mt-20 text-sm sm:text-base text-pink-200/80 font-serif font-medium flex items-center justify-center gap-2">
        <span>Designed by your bhavesh 🫂</span>
      </div>
    </section>
  );
};
