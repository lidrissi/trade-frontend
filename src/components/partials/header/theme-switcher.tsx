"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          rounded="full"
          className="md:bg-secondary text-secondary-foreground hover:bg-secondary h-auto w-auto bg-transparent hover:ring-0 hover:ring-offset-0 md:h-8 md:w-8"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "text-default-600 mb-[2px] cursor-pointer p-2 text-sm font-medium",
            {
              "bg-default text-default-foreground": theme === "light",
            },
          )}
        >
          <Icon icon="heroicons-outline:sun" className="me-2 h-5 w-5" />
          <span className="me-2">Light</span>
          <Check
            className={cn("ms-auto h-4 w-4 flex-none", {
              hidden: theme !== "light",
            })}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "text-default-600 hover:bg-default hover:text-default-foreground dark:hover:bg-background mb-[2px] cursor-pointer p-2 text-sm font-medium",
            {
              "bg-default text-default-foreground": theme === "dark",
            },
          )}
        >
          <Icon icon="heroicons-outline:moon" className="me-2 h-5 w-5" />
          <span className="me-2">Dark</span>
          <Check
            className={cn("text-default-700 ms-auto h-4 w-4 flex-none", {
              hidden: theme !== "dark",
            })}
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "text-default-600 hover:bg-default hover:text-default-foreground dark:hover:bg-background mb-[2px] cursor-pointer p-2 text-sm font-medium",
            {
              "bg-default text-default-foreground": theme === "system",
            },
          )}
        >
          <Icon icon="heroicons:computer-desktop" className="me-2 h-5 w-5" />
          <span className="me-2">system</span>
          <Check
            className={cn("text-default-700 ms-auto h-4 w-4 flex-none", {
              hidden: theme !== "system",
            })}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeButton;
