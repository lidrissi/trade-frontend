"use client";

import { createContext, useContext } from "react";
import { AppAbility, defineAbilityFor } from "@/lib/ability";
import { useSession } from "next-auth/react";

export const AbilityContext = createContext<AppAbility | null>(null);

export function AbilityProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  //@ts-ignore
  const ability = session?.ability || defineAbilityFor(session?.user || null);
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  );
}

export function useAbility() {
  const ability = useContext(AbilityContext);
  if (!ability)
    throw new Error("useAbility must be used within AbilityProvider");
  return ability;
}
