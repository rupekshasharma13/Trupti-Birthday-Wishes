"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayConfig } from "@/config/birthday.config";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(birthdayConfig.audio.defaultVolume || 0.7);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Configure volume & loop properties
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      audioRef.current.loop = true;
    }
  }, [volume, isMuted]);

  // Direct, guaranteed play execution on user click
  const handleOkayClick = () => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.loop = true;
      audio.muted = false;
      audio.volume = isMuted ? 0 : volume;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Audio play attempt 1 error:", err);
          // Retry playing
          setTimeout(() => {
            audio.play().then(() => setIsPlaying(true)).catch((e) => console.log("Retry error:", e));
          }, 100);
        });
    }
    // Close splash card
    setIsIntroActive(false);
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.loop = true;
      audio.volume = isMuted ? 0 : volume;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Toggle play error:", err));
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  return (
    <>
      {/* Universal Multi-Source HTML5 Audio Tag with Auto-Resume Protection */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => {
          if (audioRef.current && isPlaying) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
          }
        }}
        onPause={() => {
          // Auto-resume if audio pauses unexpectedly while playing state is active
          if (audioRef.current && isPlaying) {
            setTimeout(() => {
              if (audioRef.current && isPlaying && audioRef.current.paused) {
                audioRef.current.play().catch(() => {});
              }
            }, 300);
          }
        }}
      >
        <source src="/audio/dhun-laagi-pendujattcomse-viksmcob_fejzzK39.mp3" type="audio/mpeg" />
        <source src="/audio/Merged.mp3" type="audio/mpeg" />
        <source src="/audio/song.mp3" type="audio/mpeg" />
      </audio>

      {/* Full-screen Splash Card with OKAY Button */}
      <AnimatePresence>
        {isIntroActive ? (
          <motion.div
            key="audio-intro-fullscreen"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/75 backdrop-blur-lg select-none"
          >
            <div className="glass-card p-8 sm:p-12 rounded-3xl border-2 border-pink-500/40 shadow-[0_0_90px_rgba(236,72,153,0.5)] flex flex-col items-center text-center max-w-sm relative overflow-hidden">
              {/* Top Animated Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 via-purple-600 to-amber-300 p-1 flex items-center justify-center shadow-lg mb-6"
              >
                <div className="w-full h-full bg-[#0B0714] rounded-full flex items-center justify-center">
                  <Music className="w-8 h-8 text-amber-300 animate-pulse" />
                </div>
              </motion.div>

              <span className="text-xs uppercase font-bold tracking-widest text-pink-300 flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                Special Song For You
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gradient-rose-gold text-glow mb-3">
                A song for u 🎵
              </h3>

              <p className="text-sm font-serif text-pink-100/90 leading-relaxed max-w-xs mb-8 italic font-light">
                "If you want an absolute experience, stay 2–3 minutes active here and enjoy continuous music made only for you ✨"
              </p>

              {/* Glowing OKAY Button */}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleOkayClick}
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-amber-400 text-white font-bold text-base shadow-[0_0_30px_rgba(236,72,153,0.6)] border border-white/40 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white text-white group-hover:scale-125 transition-transform" />
                <span>Okay, Let's Begin ✨</span>
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Docked Bottom-Right Widget (Ultra Compact & Sleek) */
          <motion.div
            key="audio-docked-widget"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 right-4 z-50 flex items-center"
          >
            <div className="relative group flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill border border-pink-500/30 shadow-xl backdrop-blur-xl bg-black/70 hover:border-pink-500/60 transition-all duration-300">
              {/* Music Title Button */}
              <button
                onClick={togglePlay}
                className="flex items-center gap-1.5 cursor-pointer group"
                aria-label="Toggle play music"
              >
                <Music className={`w-3.5 h-3.5 text-pink-400 ${isPlaying ? "animate-bounce" : ""}`} />
                <span className="text-[11px] font-semibold text-pink-200 tracking-tight group-hover:text-amber-300 transition-colors">
                  A song for u 🎵
                </span>

                {/* Animated Equalizer Waveform */}
                <div className="flex items-end gap-0.5 h-3 ml-0.5">
                  {[10, 16, 12].map((h, index) => (
                    <motion.span
                      key={index}
                      animate={
                        isPlaying
                          ? {
                              height: [3, h, 4, h * 0.8, 3],
                            }
                          : { height: 2 }
                      }
                      transition={{
                        repeat: Infinity,
                        duration: 0.7 + index * 0.15,
                        ease: "easeInOut",
                      }}
                      className="w-0.5 bg-gradient-to-t from-pink-500 to-amber-300 rounded-full"
                    />
                  ))}
                </div>
              </button>

              {/* Sound Icon Toggle (Play / Stop) */}
              <div
                className="relative flex items-center border-l border-white/15 pl-1.5"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <button
                  onClick={togglePlay}
                  className="p-1 text-white/70 hover:text-white transition-colors cursor-pointer"
                  aria-label="Toggle play and stop music"
                >
                  {!isPlaying ? (
                    <VolumeX className="w-3.5 h-3.5 text-red-400" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-pink-300" />
                  )}
                </button>

                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 55 }}
                      exit={{ opacity: 0, width: 0 }}
                      className="overflow-hidden flex items-center pl-1"
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => {
                          const newVol = parseFloat(e.target.value);
                          setVolume(newVol);
                          if (audioRef.current) audioRef.current.volume = newVol;
                          if (isMuted) setIsMuted(false);
                        }}
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
