"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { AfrilandLogo } from "@/components/afriland-logo";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  // Position de la souris pour le masque
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Taille du rayon d'exploration (s'agrandit au survol des liens)
  const maskSize = useSpring(150, { stiffness: 400, damping: 30 });

  // Création du masque net (sans flou) via un gradient radial dur
  const maskImage = useMotionTemplate`radial-gradient(circle ${maskSize}px at ${mouseX}px ${mouseY}px, black 100%, transparent 100%)`;

  useEffect(() => {
    setMounted(true);
    // Initialise la position au centre de l'écran au chargement
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  if (!mounted) return null;

  return (
    <div 
      className="relative min-h-screen w-full bg-[var(--c-bg)] text-foreground font-geist overflow-hidden cursor-crosshair selection:bg-transparent"
      onMouseMove={handleMouseMove}
    >
      {/* Lignes de ciblage (Crosshairs) qui suivent la souris - Couche de fond */}
      <motion.div 
        className="absolute top-0 bottom-0 w-[1px] bg-black/10 dark:bg-white/10 z-0 pointer-events-none"
        style={{ left: mouseX }}
      />
      <motion.div 
        className="absolute left-0 right-0 h-[1px] bg-black/10 dark:bg-white/10 z-0 pointer-events-none"
        style={{ top: mouseY }}
      />

      {/* Navbar Minimaliste */}
      <div className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto">
          <Link href="/">
            <AfrilandLogo />
          </Link>
        </div>
        {/* <div className="text-xs font-mono font-bold tracking-widest uppercase">
          ERR_ZONE_INCONNUE
        </div> */}
      </div>

      {/* ========================================================
          COUCHE 1 : LE FOND (Mode Squelette / Vide) 
          ======================================================== */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
        
        {/* Le 404 géant en mode "Blueprint" (Juste les contours) */}
        <h1 
          className="text-[25vw] md:text-[300px] font-bold leading-none tracking-tighter"
          style={{ 
            WebkitTextStroke: "2px currentColor", 
            color: "transparent",
            opacity: 0.2
          }}
        >
          404
        </h1>
        
        <div className="text-center mt-4">
          <p className="font-mono text-sm uppercase tracking-[0.3em] mb-2 opacity-50">
            Salle inexistante
          </p>
          <h2 className="text-2xl md:text-4xl font-light mb-12">
            Cette zone n'est pas sur les plans.
          </h2>
        </div>

        {/* Boutons (Couche cliquable) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link 
            href="/"
            onMouseEnter={() => maskSize.set(400)} // Agrandit le scanner au survol
            onMouseLeave={() => maskSize.set(150)}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-foreground/20 hover:border-foreground transition-colors font-medium relative group"
          >
            <span>Retour à l'accueil</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/record"
            onMouseEnter={() => maskSize.set(400)}
            onMouseLeave={() => maskSize.set(150)}
            className="flex items-center gap-3 px-8 py-4 font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explorer mes Records</span>
          </Link>
        </div>
      </div>

      {/* ========================================================
          COUCHE 2 : LE MASQUE ROUGE (Mode Plein / Découvert) 
          ======================================================== */}
      <motion.div 
        className="absolute inset-0 bg-[var(--c-red)] text-white flex flex-col items-center justify-center p-4 z-20 pointer-events-none"
        style={{ WebkitMaskImage: maskImage, maskImage: maskImage }}
      >
        {/* Le 404 géant Rempli */}
        <h1 className="text-[25vw] md:text-[300px] font-bold leading-none tracking-tighter text-white">
          404
        </h1>
        
        <div className="text-center mt-4">
          <p className="font-mono text-sm uppercase tracking-[0.3em] mb-2 text-white/70">
            Signal Retrouvé
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold mb-12 text-white">
            Reprenons le contrôle.
          </h2>
        </div>

        {/* Boutons (Visuels identiques, mais inversés en couleur) */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white bg-white text-[var(--c-red)] font-bold">
            <span>Retour à l'accueil</span>
            <ArrowRight className="w-4 h-4 translate-x-1" />
          </div>
          <div className="flex items-center gap-3 px-8 py-4 font-bold text-white">
            <Compass className="w-4 h-4" />
            <span>Explorer mes Records</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}