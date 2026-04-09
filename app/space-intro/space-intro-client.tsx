"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Plus, LogIn, User, Briefcase, Building, MessageSquare } from "lucide-react";

export function SpaceIntroClient({ defaultShowOptions = false }: { defaultShowOptions?: boolean }) {
  const [currentView, setCurrentView] = useState<"intro" | "options" | "createForm">(
    defaultShowOptions ? "options" : "intro"
  );
  
  const router = useRouter();
  const [formData, setFormData] = useState({
    pseudonyme: "",
    adminRole: "",
    name: "",
    objective: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateSpace = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/space/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: "Erreur inconnue" }));
        throw new Error(errorData.error || "Erreur de création");
      }

      router.push("/space");
      router.refresh(); // Ensure the dashboard picks up the new space
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la création de l'espace");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-geist absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {currentView === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center w-full h-full"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/team.jpg')" }}
            />
            <div className="absolute inset-0 z-10 bg-[#0A0F15]/85" />

            {/* Content */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto mt-[-8vh]">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white text-5xl md:text-5xl font-bold tracking-tight mb-5"
              >
                Afriland Space
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-white/80 text-sm md:text-base leading-relaxed mb-10 text-center font-light px-2"
              >
                Ne laissez plus l'information se perdre. Avec Afriland Space, regroupez vos équipes
                par projets ou par expertises dans des canaux sécurisés. Une plateforme pensée
                pour la réactivité et la précision du secteur bancaire.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <motion.button
                  onClick={() => setCurrentView("options")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-2 bg-[var(--c-red)] hover:bg-[var(--c-red)]/90 text-white px-6 py-3 rounded-md font-medium transition-colors text-sm"
                >
                  <span>Créer un espace</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-4 h-4 ml-1 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
        
        {currentView === "options" && (
          <motion.div
            key="options"
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.95 }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1
                }
              }
            }}
            className="relative z-20 flex flex-col gap-4 w-full max-w-[460px] px-4"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
              }}
              className="w-full"
            >
              <button onClick={() => setCurrentView("createForm")} className="w-full focus:outline-none block">
                <motion.div 
                  whileHover={{ scale: 1.03, borderColor: "var(--c-red)", boxShadow: "0 0 20px rgba(230, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-6 border border-[var(--c-red)]/50 bg-[#0A0A0A] hover:bg-[#111111] p-4 rounded-xl cursor-pointer transition-colors"
                >
                  <div className="bg-white rounded-xl p-2.5 flex items-center justify-center text-black">
                    <Plus className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="text-white font-medium text-lg tracking-tight">Créer un espace</span>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        )}

        {currentView === "createForm" && (
          <motion.div
            key="createForm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-20 w-full max-w-[560px] px-4"
          >
            <form onSubmit={handleCreateSpace} className="border border-[#1A1A1A] bg-[#0C0C0C] rounded-2xl p-8 flex flex-col gap-6 shadow-2xl">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888888] font-geist">Pseudonyme <span className="text-[var(--c-red)]">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#555]">
                    <User className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={formData.pseudonyme}
                    onChange={(e) => setFormData({...formData, pseudonyme: e.target.value})}
                    placeholder="Saisissez votre pseudonyme..." 
                    className="w-full font-geist bg-[#111] border border-[#222] text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#444]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888888] font-geist">Rôle AFB <span className="text-[var(--c-red)]">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#555]">
                    <Briefcase className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={formData.adminRole}
                    onChange={(e) => setFormData({...formData, adminRole: e.target.value})}
                    placeholder="Ex: Responsable Comptabilité..." 
                    className="w-full font-geist bg-[#111] border border-[#222] text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#444]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888888] font-geist">
                  Nom de l'espace <span className="text-[var(--c-red)]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#555]">
                    <Building className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Saisissez le nom de l'espace..." 
                    className="w-full font-geist bg-[#111] border border-[#222] text-white text-sm rounded-full pl-12 pr-4 py-3.5 focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#444]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-[#888888] font-geist">
                  Objectif <span className="text-[var(--c-red)]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-[#555]">
                    <MessageSquare className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <textarea 
                    required
                    value={formData.objective}
                    onChange={(e) => setFormData({...formData, objective: e.target.value})}
                    placeholder="Quel est l'objectif de cet espace ?" 
                    rows={4}
                    className="w-full font-geist bg-[#111] border border-[#222] text-white text-sm rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:border-[#444] transition-colors placeholder:text-[#444] resize-none"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-2">
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(255,255,255,0.1)] disabled:opacity-50"
                >
                  {isSubmitting ? "Création en cours..." : "Soumettre le formulaire"}
                </motion.button>
              </div>

            </form>
          </motion.div>
        )}


      </AnimatePresence>
    </div>
  );
}
