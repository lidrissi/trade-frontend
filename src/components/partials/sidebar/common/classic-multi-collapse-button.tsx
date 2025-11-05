"use client";
import React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { SubChildren } from "@/lib/menus";
import { useMobileMenuConfig } from "@/hooks/use-mobile-menu";

interface CollapseMenuButtonProps {
  icon?: string;
  label: string;
  active: boolean;
  submenus: SubChildren[];
}

export function MultiCollapseMenuButton({
  label,
  active,
  submenus,
}: CollapseMenuButtonProps) {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some(
    (submenu) => submenu.active || pathname.startsWith(submenu.href),
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  const [mobileMenuConfig, setMobileMenuConfig] = useMobileMenuConfig();
  return (
    <Collapsible
      open={isCollapsed}
      onOpenChange={setIsCollapsed}
      className="mb-2 w-full last:mb-0"
    >
      <CollapsibleTrigger asChild>
        <div className="group flex items-center first:mt-3 [&[data-state=open]>button>div>div>svg]:rotate-180">
          <Button
            color="secondary"
            variant="ghost"
            className="h-auto w-full justify-start px-5 text-sm font-normal capitalize hover:bg-transparent hover:ring-offset-0 md:px-5"
            fullWidth
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                <span
                  className={cn(
                    "ring-secondary-foreground me-3 h-1.5 w-1.5 rounded-full ring-1 transition-all duration-150",
                    {
                      "bg-default ring-default/30 ring-4": active,
                    },
                  )}
                ></span>
                <p className={cn("max-w-[150px] truncate")}>{label}</p>
              </div>
              <div
                className={cn(
                  "bg-menu-arrow text-menu-menu-foreground group-hover:bg-menu-arrow-active inline-flex h-5 w-5 items-center justify-center rounded-full whitespace-nowrap transition-all duration-300",
                  {
                    "bg-menu-arrow-active": active,
                  },
                )}
              >
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200"
                />
              </div>
            </div>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        {submenus.map(({ href, label, active }, index) => (
          <Button
            key={index}
            onClick={() =>
              setMobileMenuConfig({ ...mobileMenuConfig, isOpen: false })
            }
            color="secondary"
            variant="ghost"
            className="mb-1.5 h-auto w-full justify-start text-[13px] font-normal first:mt-3 hover:bg-transparent"
            asChild
          >
            <Link href={href}>
              <span
                className={cn(
                  "bg-default me-3 h-1 w-1 rounded-full transition-all duration-150",
                  {
                    "bg-secondary ring-default/30 ring-4": active,
                  },
                )}
              ></span>
              <p className={cn("max-w-[170px] truncate")}>{label}</p>
            </Link>
          </Button>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
