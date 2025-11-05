"use client";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import React from "react";

const MenuLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  const [config] = useConfig();
  if (config.sidebar === "compact") return null;
  return (
    <p
      className={cn(
        "text-default-800 max-w-[248px] truncate py-4 text-xs font-semibold uppercase",
        className,
      )}
    >
      {label}
    </p>
  );
};

export default MenuLabel;
