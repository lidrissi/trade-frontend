import { ArrowRight } from "lucide-react";

export default function Explore() {
  return (
    <div className="relative">
      <div
        className="h-full min-h-80 w-full rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/home/stories/story4.png')`,
          clipPath:
            "polygon(0 0, 60% 0, 60% 60px, 100% 60px, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="absolute top-0 right-0 flex items-center gap-3">
        <span className="text-xs font-semibold text-[#666666] md:text-base">
          Explore more
        </span>
        <button className="bg-cyan hover:bg-cyan/90 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-colors">
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
