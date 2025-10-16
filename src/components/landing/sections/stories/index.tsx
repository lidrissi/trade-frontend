import { ArrowRight, Image } from 'lucide-react';
import Story from './story';

export default function Stories() {
  return (
    <div className="container px-6 mx-auto">
      <h1 className="text-3xl font-bold text-black mb-4">Success Stories</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
        {/* Left column - Three story cards */}
        <div className="flex flex-col gap-6 justify-between">
          <Story />
          <Story />
          <Story />
        </div>

        {/* Right column - Featured content */}
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10">
            <span className="text-[#666666] text-base font-medium">Explore more</span>
            <button className="bg-black rounded-full w-14 h-14 flex items-center justify-center hover:scale-105 transition-transform">
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="bg-[#dcdcdc] rounded-3xl h-full w-full flex">
            <Image className="w-10 h-10 object-cover rounded-3xl m-auto text-[#666666]" />
          </div>
        </div>
      </div>
    </div>
  );
}
