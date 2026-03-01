"use client";

import React, { useState } from "react";
import { AfrilandCard } from "../afriland-card";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Play,
  Filter,
  ArrowUpDown,
  FileText,
  Clock,
  Download,
  X,
  FileDown,
  CheckCircle2,
} from "lucide-react";

type Fichier = {
  titre: string;
  apercu: string;
  date: string;
  statut: string;
  duree: string;
  couleurStatut: string;
};

const ModalTelechargement = ({
  fichier,
  onClose,
}: {
  fichier: Fichier;
  onClose: () => void;
}) => {
  const [telecharge, setTelecharge] = useState(false);

  const handleTelecharger = () => {
    setTelecharge(true);
    setTimeout(() => {
      onClose();
      setTelecharge(false);
    }, 1800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Icône */}
        <div className="flex items-center justify-center w-14 h-14 bg-[#111] rounded-xl mb-6">
          <FileDown className="w-7 h-7 text-[var(--c-red)]" />
        </div>

        {/* Titre */}
        <h3 className="font-bold text-lg text-black mb-1 truncate">
          {fichier.titre}
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Durée : {fichier.duree} · Enregistré le {fichier.date}
        </p>

        {/* Aperçu */}
        <div className="bg-gray-50 border border-black/8 rounded-xl p-4 mb-6">
          <p className="text-xs text-gray-600 italic leading-relaxed">
            {fichier.apercu}
          </p>
        </div>

        {/* Action */}
        <AnimatePresence mode="wait">
          {!telecharge ? (
            <motion.button
              key="dl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleTelecharger}
              className="w-full flex items-center justify-center gap-3 bg-[#111] text-white text-sm font-bold tracking-wider py-4 px-6 rounded-xl hover:bg-[#222] transition-colors uppercase"
            >
              <Download className="w-4 h-4" />
              Télécharger en PDF
            </motion.button>
          ) : (
            <motion.div
              key="ok"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full flex items-center justify-center gap-3 bg-green-50 text-green-700 text-sm font-bold tracking-wider py-4 px-6 rounded-xl border border-green-200"
            >
              <CheckCircle2 className="w-4 h-4" />
              Téléchargement lancé !
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export const RecordDashboard = () => {
  const [fichierSelectionne, setFichierSelectionne] = useState<Fichier | null>(null);

  const fichierRecents: Fichier[] = [
    {
      titre: "Revue Financière T3",
      apercu: "« Bon tout le monde, commençons par le trimestre... »",
      date: "24 Oct, 2026",
      duree: "01:12:43",
      statut: "Terminé",
      couleurStatut: "bg-[var(--c-red)]",
    },
    {
      titre: "Synchro Équipe Design",
      apercu: "« Le problème principal que l'on observe avec la navigation... »",
      date: "22 Oct, 2026",
      duree: "00:48:10",
      statut: "En traitement",
      couleurStatut: "bg-amber-400",
    },
    {
      titre: "Briefing Client : Apex",
      apercu: "« Nous devons nous concentrer sur trois piliers fondamentaux... »",
      date: "20 Oct, 2026",
      duree: "00:55:20",
      statut: "Terminé",
      couleurStatut: "bg-[var(--c-red)]",
    },
    {
      titre: "Notes : Stratégie Marketing",
      apercu: "[Fichier audio uniquement — Aucune transcription disponible]",
      date: "18 Oct, 2026",
      duree: "00:22:05",
      statut: "Brouillon",
      couleurStatut: "bg-gray-400",
    },
  ];

  return (
    <>
      {/* Modal de téléchargement */}
      <AnimatePresence>
        {fichierSelectionne && (
          <ModalTelechargement
            fichier={fichierSelectionne}
            onClose={() => setFichierSelectionne(null)}
          />
        )}
      </AnimatePresence>

      <AfrilandCard
        variant="white"
        gridColumn="span 12"
        delay={0.2}
        className="w-full p-8 md:p-10 border border-black/5"
      >
        <div className="flex flex-col gap-12 w-full">

          {/* ── EN COURS ────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest text-[var(--c-red)] uppercase"
            >
              En Cours
            </motion.h2>

            <div className="flex flex-col md:flex-row bg-white border border-black/10 rounded-xl overflow-hidden shadow-sm">
              {/* Panneau gauche sombre */}
              <div className="md:w-[280px] bg-[#111] p-6 flex flex-col justify-end relative min-h-[200px]">
                <div className="absolute top-6 right-6 text-white/10">
                  <Mic className="w-24 h-24" />
                </div>
                {/* Point rouge clignotant "LIVE" */}
                <motion.div
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-[var(--c-red)]" />
                  <span className="text-[10px] text-white/50 uppercase tracking-widest">
                    Enregistrement actif
                  </span>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--c-red)] text-white text-[10px] font-bold tracking-wider py-2 px-4 w-fit rounded-sm uppercase"
                >
                  Reprendre
                </motion.button>
              </div>

              {/* Contenu droit */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-light mb-2">
                  RÉUNION DIRECTION — Q4
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>00:14:32 / 01:00:00</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    <span>Synchronisation automatique activée</span>
                  </div>
                </div>

                {/* Visualisation de la forme d'onde */}
                <div className="flex items-center gap-[2px] h-8 mb-8">
                  {[...Array(36)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: i < 8
                          ? ["20%", "80%", "40%", "100%", "20%"]
                          : "20%",
                        backgroundColor:
                          i < 8 ? "var(--c-red)" : "#e5e7eb",
                      }}
                      transition={{
                        repeat: i < 8 ? Infinity : 0,
                        duration: 1.2,
                        delay: i * 0.08,
                        ease: "easeInOut",
                      }}
                      className="w-1.5 rounded-full"
                    />
                  ))}
                </div>

                {/* Boutons d'action */}
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ opacity: 0.9 }}
                    className="bg-black text-white text-xs font-bold tracking-wider py-3 px-6 rounded-md flex items-center gap-2 uppercase"
                  >
                    <Play className="w-3 h-3 fill-white" /> Continuer
                  </motion.button>
                  <motion.button
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    className="border border-black/10 text-black text-xs font-bold tracking-wider py-3 px-6 rounded-md uppercase"
                  >
                    Modifier la transcription
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          {/* ── ENREGISTREMENTS RÉCENTS ──────────────────────────── */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-black/10 pb-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-lg font-semibold tracking-wide"
              >
                Enregistrements Récents
              </motion.h2>
              <div className="flex gap-2 mt-4 md:mt-0">
                <button className="text-xs font-bold tracking-wider border border-black/10 px-4 py-2 flex items-center gap-2 hover:bg-black/5 transition-colors uppercase rounded-md">
                  <Filter className="w-3 h-3" /> Filtrer
                </button>
                <button className="text-xs font-bold tracking-wider border border-black/10 px-4 py-2 flex items-center gap-2 hover:bg-black/5 transition-colors uppercase rounded-md">
                  <ArrowUpDown className="w-3 h-3" /> Trier
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {fichierRecents.map((fichier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.12)",
                  }}
                  className={`bg-white border p-6 flex flex-col justify-between h-[240px] transition-all rounded-xl ${
                    index === 2
                      ? "border-gray-400 shadow-md scale-[1.02]"
                      : "border-black/10"
                  }`}
                >
                  {/* En-tête de la carte */}
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div className="w-3 border-t border-[var(--c-red)]" />
                    </div>
                    <h3 className="font-bold text-[15px] mb-2 leading-tight">
                      {fichier.titre}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3">
                      {fichier.apercu}
                    </p>
                  </div>

                  {/* Pied de carte */}
                  <div className="flex justify-between items-center text-[10px] text-gray-400 mt-4">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono">{fichier.duree}</span>
                      <span>{fichier.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${fichier.couleurStatut}`}
                        />
                        <span>{fichier.statut}</span>
                      </div>
                      {/* Icône téléchargement PDF */}
                      <motion.button
                        whileHover={{ scale: 1.2, color: "#000" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setFichierSelectionne(fichier)}
                        title="Télécharger en PDF"
                        className="text-gray-400 hover:text-black transition-colors ml-1"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </AfrilandCard>
    </>
  );
};
