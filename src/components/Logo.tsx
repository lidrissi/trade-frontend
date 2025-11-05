"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import { useConfig } from "@/hooks/use-config";
import { useMenuHoverConfig } from "@/hooks/use-menu-hover";
import { useMediaQuery } from "@/hooks/use-media-query";
import DashCodeLogo from "./dascode-logo";

const Logo = () => {
  const [config] = useConfig();
  const [hoverConfig] = useMenuHoverConfig();
  const { hovered } = hoverConfig;
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (config.sidebar === "compact") {
    return (
      <Link
        href="/dashboard/analytics"
        className="flex items-center justify-center gap-2"
      >
        <DashCodeLogo className="text-default-900 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background h-8 w-8" />
      </Link>
    );
  }
  if (config.sidebar === "two-column" || !isDesktop) return null;

  return (
    <Link href="/dashboard/analytics" className="flex items-center gap-2">
      <DashCodeLogo className="text-default-900 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background h-8 w-8" />
      {(!config?.collapsed || hovered) && (
        <h1 className="text-default-900 text-xl font-semibold">DashCode</h1>
      )}
    </Link>
  );
};

export default Logo;
