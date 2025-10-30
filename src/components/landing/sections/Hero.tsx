import { Button } from '@/components/ui/button';
import { Search, ArrowUpRight, ImagePlusIcon } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="py-30 mb-14 w-full relative">
      <div className="absolute inset-0 -z-10 w-full">
        <Image
          fill
          sizes="100vw, 100vw"
          className="absolute h-full w-full object-cover rounded-b-5xl"
          src={'/images/home/hero.png'}
          alt="hero"
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl flex flex-col gap-12">
          <h1 className="text-3xl sm:text-6xl leading-6xl font-semibold text-white font-outfit">
            The Moroccan <span className="text-cyan">B2B</span> solution to boost your exports
          </h1>
          <div className="hidden sm:block">
            <div className="flex items-center gap-3 bg-[#ffffff] rounded-full p-1.5 shadow-sm">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="flex-1 border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0"
              />
              <button className="p-2 hover:opacity-70 transition-opacity">
                <ImagePlusIcon className="w-6 h-6 text-black" />
              </button>
              <Button size={'lg'} className="font-inter rounded-full bg-cyan hover:bg-cyan/90 w-40">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
          <div>
            <h3 className="hidden sm:block text-xl font-medium text-white font-outfit">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex">
              <Button className="font-inter text-base font-base gap-1.5 px-3 has-[>svg]:px-2.5 rounded-full bg-cyan hover:bg-cyan/90 sm:h-11 sm:px-6 sm:has-[>svg]:px-8">
                Explore Products
                <ArrowUpRight size={24} className="ml-2 block" />
              </Button>
            </div>
            <div className="flex">
              <Button
                variant="outline"
                className="font-inter text-base gap-1.5 px-4 has-[>svg]:px-4 rounded-full sm:h-11 sm:px-8 sm:has-[>svg]:px-8"
              >
                Join as Supplier
                <ArrowUpRight size={24} className="ml-2 block" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
