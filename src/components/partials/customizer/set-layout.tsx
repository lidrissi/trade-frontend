"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useConfig } from "@/hooks/use-config";
import { Icon } from "@/components/ui/icon";
import { layoutType } from "@/lib/type";
import {
  verticalLayoutSvg,
  horizontalLayoutSvg,
  semiBoxLayoutSvg,
  compactLayoutSvg,
} from "./data";

const allLayouts: { key: layoutType; label: string; icon: string }[] = [
  { key: "vertical", label: "Vertical", icon: "heroicons:chart-bar" },
  {
    key: "horizontal",
    label: "Horizontal",
    icon: "heroicons:chart-pie",
  },
  { key: "semi-box", label: "SemiBox", icon: "heroicons:chart-pie" },
  { key: "compact", label: "Compact", icon: "heroicons:chart-pie" },
];

const SetLayout = () => {
  const [config, setConfig] = useConfig();

  return (
    <div>
      <div className="mb-3 text-sm font-medium">Layout</div>
      <div className="grid grid-cols-3 gap-3">
        {allLayouts?.map(({ key, label, icon }, index) => (
          <div key={key}>
            <button
              disabled={
                (config.sidebar === "two-column" && key === "semi-box") ||
                (config.sidebar === "two-column" && key === "compact")
              }
              type="button"
              onClick={() =>
                setConfig({
                  ...config,
                  layout: key,
                  footer: "sticky",
                  navbar: "default",
                })
              }
              className={cn(
                "border-default-300 relative block h-[72px] w-full cursor-pointer overflow-hidden rounded border duration-150 disabled:cursor-not-allowed disabled:opacity-50",
                {
                  "text-default border-default-700 dark:border-default-600":
                    config.layout === key,
                  "text-muted-foreground": config.layout !== key,
                },
              )}
            >
              <Icon
                icon="heroicons:check-circle-20-solid"
                className={cn(
                  "text-default absolute top-1 right-1 scale-0 duration-100",
                  {
                    "scale-100": config.layout === key,
                  },
                )}
              />

              {key === "vertical"
                ? verticalLayoutSvg
                : key === "horizontal"
                  ? horizontalLayoutSvg
                  : key === "semi-box"
                    ? semiBoxLayoutSvg
                    : compactLayoutSvg}
            </button>

            <Label
              className={cn("text-muted-foreground mt-2.5 block font-normal", {
                "opacity-50":
                  (config.sidebar === "two-column" && key === "semi-box") ||
                  (config.sidebar === "two-column" && key === "compact"),
              })}
            >
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetLayout;
