"use client";
import { Button } from "@/components/ui/button";
import { useConfig } from "@/hooks/use-config";
import Image from "next/image";
import React from "react";

const MenuWidget = () => {
  const [config] = useConfig();
  if (config.sidebar === "compact") return null;
  return (
    <div className="dark">
      <div className="bg-default-50 relative mt-24 mb-16 rounded-2xl p-4 text-center text-white">
        <Image
          className="relative mx-auto -mt-[73px]"
          alt=""
          src="/images/svg/rabit.svg"
          priority
          width={99}
          height={114}
        />
        <div className="mx-auto mt-6 max-w-[160px]">
          <div className="">Unlimited Access</div>
          <div className="text-xs font-light">
            Upgrade your system to business plan
          </div>
        </div>
        <div className="mt-6">
          <Button
            size="sm"
            fullWidth
            className="text-default-50 hover:bg-background/90 dark:hover:text-default cursor-pointer bg-white"
          >
            Upgrade
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuWidget;
