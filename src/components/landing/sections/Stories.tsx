import { ArrowRight } from 'lucide-react';

export default function Stories() {
  return (
    <div className=" bg-[#f5f5f5] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#000000] mb-12">Success Stories</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
          {/* Left column - Three story cards */}
          <div className="flex flex-col gap-6 justify-between">
            <div className="bg-[#ffffff] rounded-3xl h-40 shadow-sm" />
            <div className="bg-[#ffffff] rounded-3xl h-40 shadow-sm" />
            <div className="bg-[#ffffff] rounded-3xl h-40 shadow-sm" />
          </div>

          {/* Right column - Featured content */}
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
              <span className="text-[#666666] text-lg font-medium">Explore more</span>
              <button className="bg-[#000000] rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight className="w-6 h-6 text-[#ffffff]" />
              </button>
            </div>
            <div className="bg-[#dcdcdc] rounded-3xl h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
