"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from "lucide-react";
import { MemoryItem } from "@/config/birthday.config";

interface LightboxModalProps {
  item: MemoryItem | null;
  items: MemoryItem[];
  onClose: () => void;
  onSelect: (item: MemoryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((m) => m.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-2xl">
        {/* Backdrop overlay dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 max-w-4xl w-full max-h-[85vh] flex flex-col items-center glass-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="relative w-full h-[55vh] md:h-[65vh] bg-black/60 flex items-center justify-center p-2">
            <img
              src={item.url}
              alt={item.caption}
              className="max-h-full max-w-full object-contain rounded-2xl shadow-lg"
            />
          </div>

          {/* Details & Caption */}
          <div className="w-full p-6 bg-black/40 backdrop-blur-md border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center gap-3 text-xs text-pink-300/80 font-medium">
              {item.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
              )}
              {item.tag && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                  <Tag className="w-3 h-3" />
                  {item.tag}
                </span>
              )}
            </div>

            <p className="text-lg md:text-xl font-serif font-medium text-white/95 leading-relaxed">
              "{item.caption}"
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
