import { Button } from "@/components/ui/button";
import { BadgeCheck, Check } from "lucide-react";

export default function Story({ description, image, name, verified }: any) {
  return (
    <div className="hover:bg-brand-light font-outfit relative w-full rounded-3xl bg-white p-4 shadow-xl hover:text-white">
      <div className="flex items-center gap-8">
        <div
          className={`flex h-32 w-32 items-center justify-center rounded-3xl bg-white bg-contain bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url('/images/home/stories/${image}')`,
          }}
        />
        <div className="flex-1 pt-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-[#666666]leading-relaxed mb-6 text-sm">
            {description}
          </p>
          <Button
            variant="link"
            className="p-0 font-semibold text-black underline"
          >
            Visit retail shop
          </Button>
          <a
            href="#"
            className="text-xl font-semibold underline transition-all hover:no-underline"
          ></a>
        </div>
        <BadgeCheck
          className="absolute top-4 right-4 z-10 h-10 w-10 text-white"
          fill={verified ? "#29D8A0" : "#656C69"}
        />
      </div>
    </div>
  );
}
