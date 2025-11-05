"use client";
import { useConfig } from "@/hooks/use-config";
import React, { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
const SidebarBg = () => {
  const [config, setConfig] = useConfig();
  const { sidebarBgImage } = config;
  const [selectedFiles, setSelectedFiles] = useState([
    "/images/all-img/img-2.jpeg",
    "/images/all-img/img-1.jpeg",
  ]);
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFiles([...selectedFiles, URL.createObjectURL(file)]);
  };

  const handleClear = () => {
    setConfig({
      ...config,
      sidebarBgImage: undefined,
    });
  };
  return (
    <div className="-mx-6 p-6">
      <div className="text-muted-foreground mb-4 text-xs font-normal uppercase">
        Choose a Sidebar Image
      </div>
      <div className="grid grid-cols-7 gap-3">
        <button
          onClick={handleClear}
          className="border-default-300 text-default-400 dark:text-default/70 flex h-[72px] cursor-pointer items-center justify-center rounded border disabled:cursor-not-allowed"
        >
          {sidebarBgImage === undefined ? (
            <Icon icon="heroicons:check" className="h-6 w-6" />
          ) : (
            <Icon icon="heroicons:x-mark" className="h-6 w-6" />
          )}
        </button>
        {selectedFiles.map((file, index) => (
          <button
            key={index}
            onClick={() => setConfig({ ...config, sidebarBgImage: file })}
            className={cn(
              "relative h-[72px] cursor-pointer rounded bg-cover bg-no-repeat bg-blend-multiply disabled:cursor-not-allowed",
              {
                "custom-bg-opacity": sidebarBgImage === file,
                "": sidebarBgImage !== file,
              },
            )}
            style={{
              backgroundImage: `url(${file})`,
            }}
          >
            {sidebarBgImage === file && (
              <Icon
                icon="heroicons:check-circle-20-solid"
                className="text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </button>
        ))}
        <label className="border-border bg-border dark:bg-secondary text-muted-foreground flex h-[72px] cursor-pointer items-center justify-center rounded border disabled:cursor-not-allowed">
          <input type="file" className="hidden" onChange={handleFileChange} />

          <Icon icon="heroicons:cloud-arrow-up" className="h-5 w-5" />
        </label>
      </div>
    </div>
  );
};

export default SidebarBg;
