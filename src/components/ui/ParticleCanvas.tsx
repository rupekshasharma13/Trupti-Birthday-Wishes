"use client";

import React, { useEffect, useRef } from "react";

interface ParticleCanvasProps {
  intensity?: "normal" | "high";
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ intensity = "normal" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const count = intensity === "high" ? 70 : 50;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulse: number;
      pulseSpeed: number;
      rotation: number;
      rotSpeed: number;
      color: string;
      type: "lotus" | "rose" | "jasmine" | "cherry" | "petal" | "sparkle" | "star";
    }> = [];

    const colors = [
      "rgba(236, 72, 153, ",  // Vivid Lotus Pink
      "rgba(244, 114, 182, ", // Soft Pink
      "rgba(245, 208, 97, ",  // Gold
      "rgba(225, 29, 72, ",   // Rose Crimson
      "rgba(232, 180, 184, ", // Rose Gold
      "rgba(255, 255, 255, ", // White
    ];

    for (let i = 0; i < count; i++) {
      const colorBase = colors[Math.floor(Math.random() * colors.length)];
      const rand = Math.random();

      // Distribution: Lotus is primary (40%), Rose (15%), Jasmine (15%), Cherry Blossom (10%), Petal (10%), Sparkle/Star (10%)
      let pType: "lotus" | "rose" | "jasmine" | "cherry" | "petal" | "sparkle" | "star" = "star";
      if (rand < 0.40) pType = "lotus";         // Lotus is the main featured flower!
      else if (rand < 0.55) pType = "rose";     // Rose
      else if (rand < 0.70) pType = "jasmine";  // Jasmine / Plumeria
      else if (rand < 0.80) pType = "cherry";   // Cherry Blossom
      else if (rand < 0.90) pType = "petal";    // Floating Petal
      else if (rand < 0.95) pType = "sparkle";  // Sparkle
      else pType = "star";

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: pType === "lotus" ? Math.random() * 12 + 14
            : pType === "rose" ? Math.random() * 9 + 10
            : pType === "jasmine" || pType === "cherry" ? Math.random() * 8 + 8
            : pType === "petal" ? Math.random() * 6 + 6
            : Math.random() * 3 + 1,
        speedY: -(Math.random() * 0.5 + 0.15),
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.7 + 0.3,
        pulse: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        color: colorBase,
        type: pType,
      });
    }

    // 1. Helper to draw a Lotus Flower (🪷 કમળ) - Main Featured Flower
    const drawLotus = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const petalCount = 8;
      const radius = size;

      // Outer Layer Petals
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount;
        ctx.save();
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius * 0.5, -radius * 0.8, 0, -radius * 1.5);
        ctx.quadraticCurveTo(-radius * 0.5, -radius * 0.8, 0, 0);

        const grad = ctx.createLinearGradient(0, 0, 0, -radius * 1.5);
        grad.addColorStop(0, `rgba(245, 208, 97, ${opacity * 0.8})`);
        grad.addColorStop(0.5, `rgba(236, 72, 153, ${opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.95})`);

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Inner Layer Petals
      for (let i = 0; i < petalCount; i++) {
        const angle = (i * 2 * Math.PI) / petalCount + Math.PI / petalCount;
        ctx.save();
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(radius * 0.35, -radius * 0.6, 0, -radius * 1.1);
        ctx.quadraticCurveTo(-radius * 0.35, -radius * 0.6, 0, 0);

        const grad = ctx.createLinearGradient(0, 0, 0, -radius * 1.1);
        grad.addColorStop(0, `rgba(244, 114, 182, ${opacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${opacity})`);

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // Golden Center Pistil
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 208, 97, ${opacity})`;
      ctx.shadowBlur = 12;
      ctx.shadowColor = "rgba(245, 208, 97, 0.9)";
      ctx.fill();

      ctx.restore();
    };

    // 2. Helper to draw a Rose Flower (🌹)
    const drawRose = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const petalLayers = 5;
      for (let i = petalLayers; i > 0; i--) {
        const r = (size * i) / petalLayers;
        ctx.beginPath();
        ctx.arc((i % 2 === 0 ? 1 : -1) * 1.5, (i % 3 === 0 ? 1 : -1) * 1.5, r, 0, Math.PI * 2);
        
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
        grad.addColorStop(0, `rgba(244, 114, 182, ${opacity})`);
        grad.addColorStop(0.7, `rgba(225, 29, 72, ${opacity * 0.85})`);
        grad.addColorStop(1, `rgba(159, 18, 57, ${opacity * 0.6})`);

        ctx.fillStyle = grad;
        ctx.fill();
      }

      ctx.restore();
    };

    // 3. Helper to draw Jasmine / Plumeria Flower (🌸 White & Gold)
    const drawJasmine = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const petals = 5;
      for (let i = 0; i < petals; i++) {
        const angle = (i * 2 * Math.PI) / petals;
        ctx.save();
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.ellipse(0, -size * 0.7, size * 0.4, size * 0.7, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.9})`;
        ctx.fill();

        ctx.restore();
      }

      // Yellow Center
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 208, 97, ${opacity})`;
      ctx.fill();

      ctx.restore();
    };

    // 4. Helper to draw Cherry Blossom (🌸 Sakura)
    const drawCherry = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      const petals = 5;
      for (let i = 0; i < petals; i++) {
        const angle = (i * 2 * Math.PI) / petals;
        ctx.save();
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(size * 0.4, -size * 0.6, 0, -size * 1.1);
        ctx.quadraticCurveTo(-size * 0.4, -size * 0.6, 0, 0);

        ctx.fillStyle = `rgba(244, 114, 182, ${opacity * 0.8})`;
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();
    };

    // 5. Helper to draw a single Floating Petal
    const drawPetal = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(size * 0.6, -size * 0.8, 0, -size * 1.6);
      ctx.quadraticCurveTo(-size * 0.6, -size * 0.8, 0, 0);

      const grad = ctx.createLinearGradient(0, 0, 0, -size * 1.6);
      grad.addColorStop(0, `rgba(236, 72, 153, ${opacity * 0.9})`);
      grad.addColorStop(1, `rgba(244, 114, 182, ${opacity * 0.5})`);

      ctx.fillStyle = grad;
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulse += p.pulseSpeed;
        p.rotation += p.rotSpeed;

        if (p.y < -30) {
          p.y = height + 30;
          p.x = Math.random() * width;
        }

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

        if (p.type === "lotus") {
          drawLotus(ctx, p.x, p.y, p.size, currentOpacity, p.rotation);
        } else if (p.type === "rose") {
          drawRose(ctx, p.x, p.y, p.size, currentOpacity, p.rotation);
        } else if (p.type === "jasmine") {
          drawJasmine(ctx, p.x, p.y, p.size, currentOpacity, p.rotation);
        } else if (p.type === "cherry") {
          drawCherry(ctx, p.x, p.y, p.size, currentOpacity, p.rotation);
        } else if (p.type === "petal") {
          drawPetal(ctx, p.x, p.y, p.size, currentOpacity, p.rotation);
        } else if (p.type === "sparkle") {
          ctx.fillStyle = `rgba(245, 208, 97, ${currentOpacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
          ctx.shadowBlur = 8;
          ctx.shadowColor = "rgba(245, 208, 97, 0.8)";
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `${p.color}${currentOpacity})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
