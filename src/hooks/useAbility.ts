import { AbilityContext } from "@/providers/AbilityProvider";
import { useContext } from "react";

export function useAbility() {
  return useContext(AbilityContext);
}
