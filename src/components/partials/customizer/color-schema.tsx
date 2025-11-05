"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Icon } from "@/components/ui/icon";

const allThemes = [
  { key: "light", label: "Light", icon: "heroicons:sun" },
  { key: "dark", label: "Dark", icon: "heroicons:moon" },
  { key: "system", label: "System", icon: "heroicons:window" },
];

const ColorSchema = () => {
  const { theme, setTheme, resolvedTheme: mode } = useTheme();

  return (
    <div>
      <div className="relative mb-3 inline-block rounded-md text-sm font-medium text-(--theme-primary) before:absolute before:top-0 before:left-0 before:z-[-1] before:h-full before:w-full before:rounded before:bg-(--theme-primary) before:opacity-10">
        Color Scheme
      </div>

      <div className="grid grid-cols-3 gap-3">
        {allThemes?.map((themeOption) => (
          <div key={themeOption.key} className="w-full flex-1">
            <button
              onClick={() => setTheme(themeOption.key as any)}
              className={cn(
                "border-default-300 relative flex w-full cursor-pointer items-center justify-center rounded border px-10 py-[14px] text-center",
                {
                  "text-default border-default-700 dark:border-default-600":
                    theme === themeOption.key,
                  "text-default-400 dark:text-default-600":
                    theme !== themeOption.key,
                },
              )}
            >
              {theme === themeOption.key && (
                <Icon
                  icon="heroicons:check-circle-20-solid"
                  className="absolute top-1 right-1 text-(--theme-primary)"
                />
              )}
              <div>
                <Icon icon={themeOption.icon} className="h-5 w-5" />
              </div>
            </button>
            <Label className="text-muted-foreground mt-2.5 block font-normal">
              {themeOption.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSchema;
