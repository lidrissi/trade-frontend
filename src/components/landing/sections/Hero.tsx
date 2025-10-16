import { Button } from '@/components/ui/button';
import { Search, ArrowUpRight, ImagePlusIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white mb-20">
      <div className="bg-[#e8e8e8] py-30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl leading-6xl font-bold text-black mb-12 font-outfit">
              The Moroccan B2B solution to boost your exports
            </h1>
            <div className="hidden sm:block mb-12">
              <div className="flex items-center gap-3 bg-[#ffffff] rounded-full p-1.5 shadow-sm">
                <input
                  type="text"
                  placeholder="What are you looking for ?"
                  className="flex-1 border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0"
                />
                <button className="p-2 hover:opacity-70 transition-opacity">
                  <ImagePlusIcon className="w-6 h-6 text-black" />
                </button>
                <Button size={'lg'} className="rounded-full bg-[#151515] w-40">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                <Button size={'lg'} className="rounded-full bg-[#151515]">
                  Explore Products
                </Button>
                <Button size="icon-lg" className="rounded-full bg-[#151515]">
                  <ArrowUpRight />
                </Button>
              </div>
              <div className="flex">
                <Button variant="outline" size={'lg'} className="rounded-full ">
                  Join as Supplier
                </Button>
                <Button variant="outline" size="icon-lg" className="rounded-full">
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
