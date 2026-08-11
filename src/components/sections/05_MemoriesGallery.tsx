"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Maximize2, Heart, Lock, Mail, ArrowUp } from "lucide-react";
import { birthdayConfig, MemoryItem } from "@/config/birthday.config";
import { LightboxModal } from "@/components/ui/LightboxModal";

// Flower Garlands for All 4 Edges of Every Photo Card
const flowerGarlands = [
  {
    top: ["🌸", "🪷", "🌸", "🪷", "🌸"],
    bottom: ["🪷", "🌸", "🪷", "🌸", "🪷"],
    left: ["🌸", "🪷", "🌸"],
    right: ["🪷", "🌸", "🪷"],
  },
  {
    top: ["🌹", "🌺", "🌹", "🌺", "🌹"],
    bottom: ["🌺", "🌹", "🌺", "🌹", "🌺"],
    left: ["🌹", "🌺", "🌹"],
    right: ["🌺", "🌹", "🌺"],
  },
  {
    top: ["🌼", "🌸", "🌼", "🌸", "🌼"],
    bottom: ["🌸", "🌼", "🌸", "🌼", "🌸"],
    left: ["🌼", "🌸", "🌼"],
    right: ["🌸", "🌼", "🌸"],
  },
  {
    top: ["🌷", "🪷", "🌷", "🪷", "🌷"],
    bottom: ["🪷", "🌷", "🪷", "🌷", "🪷"],
    left: ["🌷", "🪷", "🌷"],
    right: ["🪷", "🌷", "🪷"],
  },
];

interface MemoriesGalleryProps {
  isUnlocked?: boolean;
}

export const MemoriesGallery: React.FC<MemoriesGalleryProps> = ({ isUnlocked = true }) => {
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);

  const memories = birthdayConfig.memories;

  const handleGoToLetter = () => {
    const letterSection = document.getElementById("love-letter");
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="memories-gallery" className="relative py-24 px-4 max-w-7xl mx-auto z-10">
      {/* Full-Screen Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={memories}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />

      {/* Locked Section Card if letter has not been read yet */}
      {!isUnlocked ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border-2 border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] text-center flex flex-col items-center relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-amber-400 p-0.5 mb-6 shadow-[0_0_25px_rgba(236,72,153,0.5)]">
            <div className="w-full h-full rounded-full bg-[#0B0714] flex items-center justify-center">
              <Lock className="w-8 h-8 text-amber-300" />
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mb-3 drop-shadow-[0_2px_8px_rgba(245,208,97,0.3)]">
            Photo Collection Locked 🔒
          </h3>

          <p className="text-sm sm:text-base text-pink-200/90 max-w-md font-light leading-relaxed mb-8">
            Please open and finish reading Trupti-Ji's special Love Letter above to unlock <span className="font-semibold text-pink-300">“A Collection of You” ❤️</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoToLetter}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 text-white font-bold text-xs sm:text-sm shadow-[0_0_30px_rgba(236,72,153,0.5)] border border-white/30 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-amber-300" />
            <span>Open Love Letter ✉️</span>
            <ArrowUp className="w-4 h-4 text-amber-300 animate-bounce" />
          </motion.button>
        </motion.div>
      ) : (
        /* Unlocked Photo Collection Gallery */
        <AnimatePresence mode="wait">
          <motion.div
            key="unlocked-gallery"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="flex flex-col items-center text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4"
              >
                <Camera className="w-4 h-4 text-pink-400" />
                <span>Photo Collection</span>
              </motion.div>

              {/* Clean Title with Glowing Heart Icon */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow mb-4 inline-flex items-center justify-center flex-wrap gap-3"
              >
                <span>“A Collection of You”</span>
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-pink-500 fill-pink-500 inline-block drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] animate-pulse" />
              </motion.h2>

              <p className="text-sm sm:text-base text-pink-200/80 max-w-md font-light leading-relaxed">
                Tap any photo to view in full-screen
              </p>
            </div>

            {/* Masonry Grid with Full Flower Garland Frame Borders */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
              {memories.map((item, idx) => {
                const garland = flowerGarlands[idx % flowerGarlands.length];

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: (idx % 8) * 0.03 }}
                    whileHover={{ y: -6, scale: 1.025 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedItem(item)}
                    className="cursor-pointer group relative break-inside-avoid rounded-3xl p-3 glass-card border border-pink-500/30 shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-all duration-500 overflow-hidden"
                  >
                    {/* Top Flower Garland Border */}
                    <div className="absolute top-1 inset-x-0 z-20 flex justify-around px-2 text-xs pointer-events-none select-none drop-shadow-md opacity-90">
                      {garland.top.map((flower, i) => (
                        <span key={i}>{flower}</span>
                      ))}
                    </div>

                    {/* Bottom Flower Garland Border */}
                    <div className="absolute bottom-1 inset-x-0 z-20 flex justify-around px-2 text-xs pointer-events-none select-none drop-shadow-md opacity-90">
                      {garland.bottom.map((flower, i) => (
                        <span key={i}>{flower}</span>
                      ))}
                    </div>

                    {/* Left Flower Garland Border */}
                    <div className="absolute inset-y-0 left-1 z-20 flex flex-col justify-around py-4 text-xs pointer-events-none select-none drop-shadow-md opacity-90">
                      {garland.left.map((flower, i) => (
                        <span key={i}>{flower}</span>
                      ))}
                    </div>

                    {/* Right Flower Garland Border */}
                    <div className="absolute inset-y-0 right-1 z-20 flex flex-col justify-around py-4 text-xs pointer-events-none select-none drop-shadow-md opacity-90">
                      {garland.right.map((flower, i) => (
                        <span key={i}>{flower}</span>
                      ))}
                    </div>

                    {/* Inner Natural Photo Container */}
                    <div className="relative overflow-hidden w-full rounded-2xl bg-black/40">
                      <img
                        src={item.url}
                        alt="Trupti-Ji Photo"
                        decoding="async"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes("avatar.png")) {
                            target.src = "/images/avatar.png";
                          }
                        }}
                        className="w-full h-auto block object-contain transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Dark Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      {/* Full-screen Expand Icon on Hover */}
                      <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-30">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Romantic Post-Gallery Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-20 flex justify-center"
            >
              <div className="glass-card max-w-2xl w-full p-8 sm:p-12 rounded-3xl border border-pink-500/40 shadow-[0_0_50px_rgba(236,72,153,0.3)] text-center flex flex-col items-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center mb-6 shadow-inner">
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
                </div>

                <p className="text-xl sm:text-3xl font-serif italic text-gradient-rose-gold text-glow leading-relaxed font-medium mb-3">
                  “I’ve seen so many versions of you…”
                </p>

                <p className="text-xl sm:text-3xl font-serif italic text-amber-300 text-glow leading-relaxed font-semibold">
                  “and I’ve loved every single one.”
                </p>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
};
