"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "@/hooks/useLenis";
import { ParticleCanvas } from "@/components/ui/ParticleCanvas";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { LoadingScreen } from "@/components/sections/01_LoadingScreen";
import { HeroSection } from "@/components/sections/02_HeroSection";
import { BirthdayMessage } from "@/components/sections/03_BirthdayMessage";
import { LoveLetter } from "@/components/sections/04_LoveLetter";
import { MemoriesGallery } from "@/components/sections/05_MemoriesGallery";
import { GrandFinale } from "@/components/sections/08_GrandFinale";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasBegun, setHasBegun] = useState(false);

  // Section Confirmation Unlock States
  const [step3Unlocked, setStep3Unlocked] = useState(false);
  const [step4Unlocked, setStep4Unlocked] = useState(false);
  const [step5Unlocked, setStep5Unlocked] = useState(false);

  // Enable Lenis smooth scroll
  useLenis();

  const handleBeginSurprise = () => {
    setHasBegun(true);
    // Scroll to birthday message after sections render
    setTimeout(() => {
      const wishSection = document.getElementById("birthday-message");
      if (wishSection) {
        wishSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  const handleReplayStory = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#0B0714] text-white overflow-hidden selection:bg-pink-500/30 selection:text-pink-200">
      {/* Global Animated Background Particles */}
      <ParticleCanvas intensity="normal" />

      {/* Persistent Floating Audio Player */}
      {!isLoading && <AudioPlayer />}

      {/* Loading Screen Curtain */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Interactive Story Sections */}
      {!isLoading && (
        <div className="relative z-10">
          {/* Section 1: Hero — always visible */}
          <HeroSection onBegin={handleBeginSurprise} />

          {/* All remaining sections — only revealed after Begin Surprise */}
          <AnimatePresence>
            {hasBegun && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                {/* Section 2: Birthday Message Card */}
                <BirthdayMessage
                  onConfirmMessage={() => setStep3Unlocked(true)}
                />

                {/* Section 3: Love Letter (Requires Section 2 confirmation) */}
                <LoveLetter
                  isUnlocked={step3Unlocked}
                  onLetterReadComplete={() => setStep4Unlocked(true)}
                />

                {/* Section 4: Memories Gallery (Requires Section 3 confirmation) */}
                <MemoriesGallery
                  isUnlocked={step4Unlocked}
                  onConfirmGallery={() => setStep5Unlocked(true)}
                />

                {/* Section 5: Grand Finale (Requires Section 4 confirmation) */}
                <GrandFinale
                  isUnlocked={step5Unlocked}
                  onReplay={handleReplayStory}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </main>
  );
}
