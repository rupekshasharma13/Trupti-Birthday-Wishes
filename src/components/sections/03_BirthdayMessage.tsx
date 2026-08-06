"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Quote } from "lucide-react";
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
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-6"
        >
          <HeartHandshake className="w-4 h-4 text-pink-400" />
          <span>Warmest Wishes</span>
        </motion.div>

        {/* Header */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold mb-10 text-glow"
        >
          {birthdayConfig.messages.birthdayCardTitle}
        </motion.h2>

        {/* Message Card */}
        <GlassCard glowColor="rose" className="w-full relative p-8 sm:p-12">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-pink-500/20 pointer-events-none" />
          <Quote className="absolute bottom-6 right-6 w-12 h-12 text-pink-500/20 rotate-180 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {birthdayConfig.messages.birthdayCardText.map((paragraph, idx) => (
              <motion.p
                key={idx}
                variants={itemVariants}
                className="text-lg sm:text-2xl font-serif text-white/90 leading-relaxed font-light"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-sm text-pink-300 font-medium italic"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Sending love & infinite joy today and always</span>
            <Sparkles className="w-4 h-4 text-amber-300" />
          </motion.div>
        </GlassCard>
      </motion.div>
    </section>
  );
};
