"use client";

import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import SocialButton from "./social-button";

type Provider = "google";

type ProviderType = {
  name: Provider;
  label: string;
  icon: string;
  size: number;
};

const providers: ProviderType[] = [
  {
    name: "google",
    label: "Continuer avec google",
    icon: "/google.png",
    size: 30,
  },
  
];

const SocialAuthButtons = () => {
  const handleOAuthLogin = async (provider: Provider) => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="space-y-2">
      {providers.map((provider: ProviderType) => (
        <SocialButton
          key={provider.name}
          action={() => handleOAuthLogin(provider.name)}
        >
          <Image
            src={provider.icon}
            width={provider.size}
            height={provider.size}
            alt={provider.name}
          />
          {provider.label}
        </SocialButton>
      ))}
    </div>
  );
};

export default SocialAuthButtons;