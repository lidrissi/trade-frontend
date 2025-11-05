"use client";
import React, { CSSProperties } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@/components/ui/icon";
import { Submenu } from "@/lib/menus";

// for dnd

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useConfig } from "@/hooks/use-config";
import { MultiCollapseMenuButton } from "./classic-multi-collapse-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useMobileMenuConfig } from "@/hooks/use-mobile-menu";
import { useMenuHoverConfig } from "@/hooks/use-menu-hover";

interface CollapseMenuButtonProps {
  icon: string;
  label: string;
  active: boolean;
  submenus: Submenu[];
  collapsed: boolean | undefined;
  id: string;
}

export function CollapseMenuButton({
  icon,
  label,
  active,
  submenus,
  collapsed,
  id,
}: CollapseMenuButtonProps) {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some(
    (submenu) => submenu.active || pathname.startsWith(submenu.href),
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  const [mobileMenuConfig, setMobileMenuConfig] = useMobileMenuConfig();
  const [config] = useConfig();
  const [hoverConfig] = useMenuHoverConfig();
  const { hovered } = hoverConfig;
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const {
    transform,
    transition,
    setNodeRef,
    isDragging,
    attributes,
    listeners,
  } = useSortable({
    id: id,
  });

  React.useEffect(() => {
    setIsCollapsed(isSubmenuActive);
  }, [isSubmenuActive, pathname]);

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition,
    opacity: isDragging ? 0.8 : 1,
    zIndex: isDragging ? 1 : 0,
    position: "relative",
  };

  if (config.sidebar === "compact" && isDesktop) {
    return (
      <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
        <CollapsibleTrigger asChild>
          <Button
            variant={active ? "default" : "ghost"}
            fullWidth
            color={active ? "default" : "secondary"}
            className={cn(
              "ring-offset-sidebar h-auto flex-col px-3.5 py-1.5 font-semibold capitalize hover:ring-transparent hover:ring-offset-0",
              {
                "bg-secondary text-default hover:bg-secondary":
                  active && config.sidebarColor !== "light",
              },
            )}
          >
            <Icon icon={icon} className={cn("mb-1 h-6 w-6")} />

            <p className={cn("max-w-[200px] truncate text-[11px]")}>{label}</p>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
          {submenus.map(({ href, label, active }, index) => (
            <Button
              key={index}
              color={active ? "default" : "secondary"}
              variant="ghost"
              fullWidth
              size="sm"
              className={cn(
                "hover:text-default mb-2 h-auto w-full justify-center p-0 text-center text-xs font-normal capitalize first:mt-4 last:mb-0 hover:bg-transparent",
                {
                  "font-semibold": active,
                },
              )}
              asChild
            >
              <Link href={href}>{label}</Link>
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return !collapsed || hovered ? (
    <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
      <CollapsibleTrigger className="" asChild>
        <div className="peer group flex items-center [&[data-state=open]>button>div>div>svg]:rotate-180">
          <Button
            style={style}
            ref={setNodeRef}
            variant={active ? "default" : "ghost"}
            color="secondary"
            className={cn(
              "group ring-offset-sidebar group-data-[state=open]:bg-secondary h-auto justify-start px-3 py-3 capitalize hover:ring-transparent md:px-3",
              {
                "md:hover:ps-8": config.sidebar === "draggable" && isDesktop,
              },
            )}
            fullWidth
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center">
                {config.sidebar === "draggable" && isDesktop && (
                  <GripVertical
                    {...attributes}
                    {...listeners}
                    className={cn(
                      "inset-t-0 invisible absolute me-1 h-5 w-5 opacity-0 transition-all group-hover:visible group-hover:opacity-100 ltr:-translate-x-6 group-hover:ltr:-translate-x-5 rtl:translate-x-6 group-hover:rtl:translate-x-5",
                      {},
                    )}
                  />
                )}
                <span className="me-4">
                  <Icon icon={icon} className="h-5 w-5" />
                </span>
                <p
                  className={cn(
                    "max-w-[150px] truncate",
                    !collapsed || hovered
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-96 opacity-0",
                  )}
                >
                  {label}
                </p>
              </div>
              <div
                className={cn(
                  "bg-menu-arrow text-menu-menu-foreground group-hover:bg-menu-arrow-active inline-flex h-5 w-5 items-center justify-center rounded-full whitespace-nowrap transition-all duration-300",
                  !collapsed || hovered
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-96 opacity-0",
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
        {submenus.map(
          ({ href, label, active, children: subChildren }, index) =>
            subChildren?.length === 0 ? (
              <Button
                onClick={() =>
                  setMobileMenuConfig({ ...mobileMenuConfig, isOpen: false })
                }
                key={index}
                color="secondary"
                variant="ghost"
                className={cn(
                  "mb-2 h-auto w-full justify-start px-5 text-sm font-normal capitalize first:mt-3 last:mb-0 hover:bg-transparent hover:ring-offset-0 md:px-5",
                  {
                    "font-medium": active,
                    "dark:opacity-80": !active,
                  },
                )}
                asChild
              >
                <Link href={href}>
                  <span
                    className={cn(
                      "ring-secondary-foreground me-3 h-1.5 w-1.5 rounded-full ring-1 transition-all duration-150",
                      {
                        "bg-default ring-default/30 ring-4": active,
                      },
                    )}
                  ></span>
                  <p
                    className={cn(
                      "max-w-[170px] truncate",
                      !collapsed || hovered
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-96 opacity-0",
                    )}
                  >
                    {label}
                  </p>
                </Link>
              </Button>
            ) : (
              <React.Fragment key={index}>
                <MultiCollapseMenuButton
                  label={label}
                  active={active}
                  submenus={subChildren as any}
                />
              </React.Fragment>
            ),
        )}
      </CollapsibleContent>
    </Collapsible>
  ) : (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button
                variant={active ? "default" : "ghost"}
                color="secondary"
                className="w-full justify-center"
                size="icon"
              >
                <Icon icon={icon} className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent side="right" align="start" alignOffset={2}>
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent
        side="right"
        sideOffset={20}
        align="start"
        className={`border-sidebar space-y-1.5`}
      >
        <DropdownMenuLabel className="max-w-[190px] truncate">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-default-300" />
        <DropdownMenuGroup>
          {submenus.map(({ href, label, icon, active, children }, index) =>
            children?.length === 0 ? (
              <DropdownMenuItem
                key={index}
                asChild
                className={cn("focus:bg-secondary", {
                  "bg-secondary text-secondary-foreground": active,
                })}
              >
                <Link className="flex-flex cursor-pointer gap-3" href={href}>
                  {icon && <Icon icon={icon} className="h-4 w-4" />}
                  <p className="max-w-[180px] truncate">{label} </p>
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuSub key={index}>
                <DropdownMenuSubTrigger>
                  <span>{label}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <ScrollArea className="h-[200px]">
                      {children?.map(({ href, label, active }, index) => (
                        <DropdownMenuItem key={`nested-index-${index}`}>
                          <Link href={href}>{label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </ScrollArea>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            ),
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
