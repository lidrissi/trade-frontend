import { ArrowRight } from 'lucide-react';

export default function Explore() {
  return (
    <div className="relative">
      <div
        className="min-h-80 w-full h-full rounded-2xl bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/home/story4.png')`,
          clipPath: 'polygon(0 0, 60% 0, 60% 60px, 100% 60px, 100% 100%, 0 100%)',
        }}
      ></div>
      <div className="flex items-center gap-3 absolute top-0 right-0">
        <span className="text-[#666666] text-xs md:text-base font-semibold">Explore more</span>
        <button className="cursor-pointer text-white w-12 h-12 rounded-full  bg-cyan flex items-center justify-center hover:bg-cyan/90 transition-colors">
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
