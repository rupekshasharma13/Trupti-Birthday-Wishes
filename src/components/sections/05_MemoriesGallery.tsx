"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Maximize2, Tag } from "lucide-react";
import { birthdayConfig, MemoryItem } from "@/config/birthday.config";
import { LightboxModal } from "@/components/ui/LightboxModal";

export const MemoriesGallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MemoryItem | null>(null);

  return (
    <section id="memories-gallery" className="relative py-24 px-4 max-w-6xl mx-auto z-10">
      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={birthdayConfig.memories}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-pink-500/30 text-xs font-semibold uppercase tracking-widest text-pink-300 mb-4"
        >
          <Camera className="w-4 h-4 text-pink-400" />
          <span>Memories & Moments</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-gradient-rose-gold text-glow mb-4"
        >
          Treasured Photographic Journey
        </motion.h2>

        <p className="text-sm sm:text-base text-pink-200/70 max-w-lg font-light">
          Tap any memory to enlarge & view details
        </p>
      </div>

      {/* Masonry Photo Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {birthdayConfig.memories.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelectedItem(item)}
            className="cursor-pointer group relative break-inside-avoid rounded-3xl overflow-hidden glass-card border border-white/10 shadow-xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative overflow-hidden aspect-[4/5] bg-black/40">
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption & Tag */}
              <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end">
                {item.tag && (
                  <span className="self-start text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-pink-500/30 text-pink-200 border border-pink-500/40 mb-2">
                    {item.tag}
                  </span>
                )}
                <p className="text-white font-serif font-semibold text-base sm:text-lg line-clamp-2">
                  {item.caption}
                </p>
                {item.date && (
                  <span className="text-xs text-pink-200/70 font-sans mt-1">
                    {item.date}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
