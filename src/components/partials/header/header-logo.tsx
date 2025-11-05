"use client";
import React from "react";
import { Link } from "@/i18n/routing";
import DashCodeLogo from "@/components/dascode-logo";
import { useConfig } from "@/hooks/use-config";
import { useMediaQuery } from "@/hooks/use-media-query";

const HeaderLogo = () => {
  const [config] = useConfig();

  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return config.layout === "horizontal" ? (
    <Link href="/dashboard/analytics" className="flex items-center gap-2">
      <DashCodeLogo className="text-default-900 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background h-8 w-8" />
      <h1 className="text-default-900 hidden text-xl font-semibold lg:block">
        DashCode
      </h1>
    </Link>
  ) : (
    !isDesktop && (
      <Link href="/dashboard/analytics" className="flex items-center gap-2">
        <DashCodeLogo className="text-default-900 [&>path:nth-child(3)]:text-background [&>path:nth-child(2)]:text-background h-8 w-8" />
        <h1 className="text-default-900 hidden text-xl font-semibold lg:block">
          DashCode
        </h1>
      </Link>
    )
  );
};

export default HeaderLogo;
