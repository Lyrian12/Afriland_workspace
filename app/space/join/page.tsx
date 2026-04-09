"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type VerifyState = "loading" | "ready" | "error";
type JoinState = "idle" | "submitting";

type VerifyResponse = {
  spaceName?: string;
  space?: {
    name?: string;
  };
};

type JoinResponse = {
  spaceId?: string;
  space?: {
    id?: string;
  };
};

export default function JoinSpacePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = useMemo(() => searchParams.get("token")?.trim() ?? "", [searchParams]);

  const [verifyState, setVerifyState] = useState<VerifyState>("loading");
  const [joinState, setJoinState] = useState<JoinState>("idle");
  const [spaceName, setSpaceName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setVerifyState("error");
      setErrorMessage("Lien d'invitation invalide : token manquant.");
      return;
    }

    let cancelled = false;
    const controller = new AbortController();

    const verifyInvite = async () => {
      setVerifyState("loading");
      setErrorMessage("");

      try {
        const response = await fetch(`/api/space/invite/verify?token=${encodeURIComponent(token)}`, {
          method: "GET",
          signal: controller.signal,
        });

        const payload = (await response.json().catch(() => ({}))) as VerifyResponse & { error?: string };
        if (!response.ok) {
          throw new Error(payload.error || "Cette invitation est invalide ou expirée.");
        }

        const receivedSpaceName = payload.spaceName || payload.space?.name;
        if (!receivedSpaceName) {
          throw new Error("Invitation invalide : espace introuvable.");
        }

        if (cancelled) return;
        setSpaceName(receivedSpaceName);
        setVerifyState("ready");
      } catch (error) {
        if (cancelled) return;
        const message = error instanceof Error ? error.message : "Invitation invalide ou expirée.";
        setVerifyState("error");
        setErrorMessage(message);
      }
    };

    void verifyInvite();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [token]);

  const handleAccept = async () => {
    if (!token || joinState === "submitting") return;

    setJoinState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/space/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.status === 401) {
        router.push(`/auth/sign-in?next=${encodeURIComponent(`/space/join?token=${token}`)}`);
        return;
      }

      const payload = (await response.json().catch(() => ({}))) as JoinResponse & { error?: string };
      if (!response.ok) {
        throw new Error(payload.error || "Impossible de rejoindre l'espace.");
      }

      const spaceId = payload.spaceId || payload.space?.id;
      if (!spaceId) {
        throw new Error("Réponse invalide : identifiant de l'espace manquant.");
      }

      router.push("/");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Impossible de rejoindre l'espace.";
      setErrorMessage(message);
      setJoinState("idle");
    }
  };

  const handleDecline = () => {
    router.push("/space-intro");
  };

  return (
    <main className="min-h-screen w-full bg-black text-white font-geist flex items-center justify-center px-4 py-8">
      <section className="w-full max-w-xl rounded-2xl border border-[#1F1F1F] bg-[#0B0B0B] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-11 w-11 rounded-lg overflow-hidden border border-[#2A2A2A] bg-white/5 flex items-center justify-center">
            <Image src="/download.jpeg" alt="Afriland Logo" width={44} height={44} className="object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#9A9A9A]">Afriland Workspace</p>
            <h1 className="text-lg sm:text-xl font-semibold">Invitation d&apos;espace</h1>
          </div>
        </div>

        {verifyState === "loading" && (
          <div className="rounded-xl border border-[#222] bg-[#101010] px-4 py-5">
            <p className="text-sm text-[#C9C9C9]">Vérification de votre invitation en cours...</p>
          </div>
        )}

        {verifyState === "ready" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#222] bg-[#101010] px-4 py-5">
              <p className="text-sm text-[#D2D2D2] leading-relaxed">
                Voulez-vous rejoindre <span className="text-white font-semibold">{spaceName}</span> ?
              </p>
            </div>

            {errorMessage && (
              <div className="rounded-lg border border-[#5A1B1B] bg-[#2A0B0B] px-3 py-2 text-sm text-[#FFB4B4]">
                {errorMessage}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
              <button
                type="button"
                onClick={handleDecline}
                className="px-4 py-2.5 rounded-lg border border-[#343434] bg-transparent text-[#C6C6C6] hover:bg-[#141414] hover:text-white transition-colors"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={handleAccept}
                disabled={joinState === "submitting"}
                className="px-4 py-2.5 rounded-lg bg-[#E60000] hover:bg-[#C60000] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold transition-colors"
              >
                {joinState === "submitting" ? "Traitement..." : "Accepter"}
              </button>
            </div>
          </div>
        )}

        {verifyState === "error" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-[#5A1B1B] bg-[#2A0B0B] px-4 py-5">
              <p className="text-sm text-[#FFB4B4] leading-relaxed">
                {errorMessage || "Ce lien d'invitation est invalide ou expiré."}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleDecline}
                className="px-4 py-2.5 rounded-lg bg-[#E60000] hover:bg-[#C60000] text-white font-semibold transition-colors"
              >
                Retour à l&apos;introduction
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
