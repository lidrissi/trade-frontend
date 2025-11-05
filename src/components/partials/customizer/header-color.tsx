"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { useConfig } from "@/hooks/use-config";
import { Icon } from "@/components/ui/icon";
import { Check } from "lucide-react";
import {
  lightTopbarColorSvg,
  colorTopbarColorSvg,
  borderedSkinSvg,
} from "./data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HeaderColor = () => {
  const [config, setConfig] = useConfig();
  const [show, setShow] = React.useState<boolean>(
    config.headerColor !== "light" && config.headerColor === "transparent",
  );

  return (
    <div className="-mx-6 p-6">
      <div className="mb-3 text-sm font-medium">Topbar Color</div>
      <div className="mb-4 grid grid-cols-3 gap-3">
        <div>
          <button
            type="button"
            onClick={() => {
              setConfig({ ...config, headerColor: "light" });
              setShow(false);
            }}
            disabled={config.headerColor === "light"}
            className={cn(
              "border-default-300 relative block h-[72px] w-full cursor-pointer overflow-hidden rounded border duration-150 disabled:cursor-not-allowed",
              {
                "text-default border-default-700 dark:border-default-600":
                  config.headerColor === "light",
                "text-muted-foreground": config.headerColor !== "light",
              },
            )}
          >
            <Icon
              icon="heroicons:check-circle-20-solid"
              className={cn(
                "text-default absolute top-1 right-1 scale-0 duration-100",
                {
                  "scale-100": config.headerColor === "light",
                },
              )}
            />
            {lightTopbarColorSvg}
          </button>
          <Label className="text-muted-foreground mt-2.5 block font-normal capitalize">
            Default
          </Label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setShow(true);
              setConfig({ ...config, headerColor: "dark" });
            }}
            disabled={show}
            className={cn(
              "border-default-300 relative block h-[72px] w-full cursor-pointer overflow-hidden rounded border duration-150 disabled:cursor-not-allowed",
              {
                "text-default border-default": show,
                "text-muted-foreground": !show,
              },
            )}
          >
            <Icon
              icon="heroicons:check-circle-20-solid"
              className={cn(
                "text-default absolute top-1 right-1 scale-0 duration-100",
                {
                  "scale-100": show,
                },
              )}
            />
            {colorTopbarColorSvg}
          </button>
          <Label className="text-muted-foreground mt-2.5 block font-normal capitalize">
            color
          </Label>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              setConfig({ ...config, headerColor: "transparent" });
              setShow(false);
            }}
            disabled={config.headerColor === "transparent"}
            className={cn(
              "border-default-300 relative block h-[72px] w-full cursor-pointer overflow-hidden rounded border duration-150 disabled:cursor-not-allowed",
              {
                "text-default border-default":
                  config.headerColor === "transparent",
                "text-muted-foreground": config.headerColor !== "transparent",
              },
            )}
          >
            <Icon
              icon="heroicons:check-circle-20-solid"
              className={cn(
                "text-default absolute top-1 right-1 scale-0 duration-100",
                {
                  "scale-100": config.headerColor === "transparent",
                },
              )}
            />
            {borderedSkinSvg}
          </button>
          <Label className="text-muted-foreground mt-2.5 block font-normal capitalize">
            transparent
          </Label>
        </div>
      </div>

      {show && (
        <div className="bg-default-200 flex flex-wrap gap-1 rounded-md p-3">
          {[
            "dark",
            "rose",
            "steel-blue",
            "purple",
            "redwood",
            "green",
            "ocean-blue",
            "gray",
          ].map((color) => (
            <div key={color}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() =>
                        setConfig({ ...config, headerColor: color })
                      }
                      disabled={config.headerColor === color}
                      className={cn(
                        "border-default-300 relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border duration-150 disabled:cursor-not-allowed",
                        {
                          "bg-default": color === "dark",
                          "bg-[#343A40]": color === "gray",
                          "bg-[#B52755]": color === "rose",
                          "bg-[#405189]": color === "steel-blue",
                          "bg-[#4A154B]": color === "purple",
                          "bg-[#5D3942]": color === "redwood",
                          "bg-[#135846]": color === "green",
                          "bg-[#0766AD]": color === "ocean-blue",
                        },
                      )}
                    >
                      <Check
                        className={cn(
                          "h-4 w-4 scale-0 text-white duration-100",
                          {
                            "scale-100": config.headerColor === color,
                          },
                        )}
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{color}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderColor;
