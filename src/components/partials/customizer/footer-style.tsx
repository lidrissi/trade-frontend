"use client";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FooterStyle = () => {
  const [config, setConfig] = useConfig();

  const { footer } = config;

  return (
    <div className="-mx-6 p-6">
      <div className="mb-3 text-sm font-medium">Footer Type</div>

      <RadioGroup
        defaultValue={footer}
        className="flex flex-wrap items-center gap-3"
        onValueChange={(value) => {
          setConfig({ ...config, footer: value as any });
        }}
      >
        {["sticky", "hidden", "default"].map((value, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <RadioGroupItem
                className="cursor-pointer disabled:cursor-not-allowed"
                value={value}
                id={`footer-style-${value}`}
                disabled={config.layout === "compact" && value !== "sticky"}
              />
              <Label
                className={cn(
                  "cursor-pointer capitalize disabled:cursor-not-allowed",
                  {
                    "cursor-not-allowed opacity-50":
                      config.layout === "compact" && value !== "sticky",
                  },
                )}
                htmlFor={`footer-style-${value}`}
              >
                {value}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FooterStyle;
