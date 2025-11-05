"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useConfig } from "@/hooks/use-config";
import { Icon } from "@/components/ui/icon";
import { wideContentWidthSvg, boxedContentWidthSvg } from "./data";
import { contentType } from "@/lib/type";

const allContent: { key: contentType; label: string }[] = [
  { key: "wide", label: "Wide" },
  { key: "boxed", label: "Boxed" },
];
const SetContentWidth = () => {
  const [config, setConfig] = useConfig();

  return (
    <div>
      <div className="mb-3 text-sm font-medium">Content Width</div>
      <div className="grid grid-cols-3 gap-3">
        {allContent?.map(({ key, label }, index) => (
          <div key={key}>
            <button
              type="button"
              onClick={() => {
                if (key === "wide") {
                  setConfig({
                    ...config,
                    contentWidth: key,
                    layout: "vertical",
                  });
                } else {
                  setConfig({ ...config, contentWidth: key });
                }
              }}
              className={cn(
                "border-default-300 relative block h-[72px] w-full cursor-pointer overflow-hidden rounded border duration-150 disabled:cursor-not-allowed",
                {
                  "text-default border-default-700 dark:border-default-600":
                    config.contentWidth === key,
                  "text-muted-foreground": config.contentWidth !== key,
                },
              )}
            >
              <Icon
                icon="heroicons:check-circle-20-solid"
                className={cn(
                  "text-default absolute top-1 right-1 scale-0 duration-100",
                  {
                    "scale-100": config.contentWidth === key,
                  },
                )}
              />

              {key === "wide"
                ? wideContentWidthSvg
                : key === "boxed"
                  ? boxedContentWidthSvg
                  : wideContentWidthSvg}
            </button>

            <Label className="text-muted-foreground mt-2.5 block font-normal capitalize">
              {label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetContentWidth;
