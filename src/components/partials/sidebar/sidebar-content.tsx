"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hooks/use-config";
import { useMenuHoverConfig } from "@/hooks/use-menu-hover";

const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  const [config] = useConfig();
  const [hoverConfig, setHoverConfig] = useMenuHoverConfig();
  if (config.menuHidden || config.layout === "horizontal") return null;

  if (config.sidebar === "two-column") {
    return (
      <aside className={cn("fixed z-50 hidden h-full xl:flex", {})}>
        <div className="relative flex h-full">{children}</div>
      </aside>
    );
  }

  return (
    <aside
      onMouseEnter={() =>
        config.sidebar === "classic" && setHoverConfig({ hovered: true })
      }
      onMouseLeave={() =>
        config.sidebar === "classic" && setHoverConfig({ hovered: false })
      }
      className={cn(
        "bg-sidebar shadow-base fixed z-50 hidden w-[248px] xl:block",
        {
          [`dark theme-${config.sidebarColor}`]:
            config.sidebarColor !== "light",
          "w-[72px]": config.collapsed && config.sidebar !== "compact",
          "border-b": config.skin === "bordered",
          "shadow-base": config.skin === "default",
          "start-0 h-full":
            config.layout !== "semi-box" && config.layout !== "compact",
          "start-0 top-0 bottom-0 m-6 rounded-md": config.layout === "semi-box",
          "start-0 top-0 bottom-0 m-10": config.layout === "compact",
          "w-28": config.sidebar === "compact",
          "w-[248px]": hoverConfig.hovered,
        },
      )}
    >
      <div className="relative flex h-full flex-col">
        {config.sidebarBgImage !== undefined && (
          <div
            className="absolute top-0 left-0 z-[-1] h-full w-full bg-cover bg-center opacity-[0.07]"
            style={{ backgroundImage: `url(${config.sidebarBgImage})` }}
          ></div>
        )}
        {children}
      </div>
    </aside>
  );
};

export default SidebarContent;
