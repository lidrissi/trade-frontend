"use client";
import React from "react";
import { RefreshCcw } from "lucide-react";
import { useConfig, defaultConfig } from "@/hooks/use-config";

const ResetConfig = () => {
  const [config, setConfig] = useConfig();
  return (
    <>
      <RefreshCcw
        onClick={() => {
          setConfig({
            ...defaultConfig,
          });
        }}
        className="text-default-600 me-4 h-4 w-4 cursor-pointer duration-150 hover:rotate-180"
      />
    </>
  );
};

export default ResetConfig;
