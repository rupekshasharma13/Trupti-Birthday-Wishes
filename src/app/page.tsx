"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  
  // Enable Lenis smooth scroll
  useLenis();

  const handleBeginSurprise = () => {
    const nextSection = document.getElementById("birthday-message");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
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
        <div className="relative z-10 space-y-12">
          {/* Section 1: Hero */}
          <HeroSection onBegin={handleBeginSurprise} />

          {/* Section 2: Birthday Message Card */}
          <BirthdayMessage />

          {/* Section 3: Tap-to-Open Love Letter */}
          <LoveLetter />

          {/* Section 4: Memories Gallery */}
          <MemoriesGallery />

          {/* Section 5: Grand Finale Fireworks */}
          <GrandFinale onReplay={handleReplayStory} />
        </div>
      )}
    </main>
  );
}
