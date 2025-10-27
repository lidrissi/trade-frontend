import { Button } from '@/components/ui/button';
import { Search, ArrowUpRight, ImagePlusIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-[#e8e8e8] py-30 mb-20 w-full">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-6xl leading-6xl font-bold text-black mb-12 font-outfit">
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
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex">
              <Button className="font-inter font-base gap-1.5 px-3 has-[>svg]:px-2.5 rounded-full bg-[#151515] sm:h-11 sm:px-6 sm:has-[>svg]:px-8">
                Explore Products
                <ArrowUpRight className="ml-2 block sm:hidden" />
              </Button>
              <Button className="size-11 hidden sm:flex rounded-full bg-[#151515]">
                <ArrowUpRight />
              </Button>
            </div>
            <div className="flex">
              <Button
                variant="outline"
                className="font-inter text-base gap-1.5 px-4 has-[>svg]:px-4 rounded-full sm:h-11 sm:px-8 sm:has-[>svg]:px-8"
              >
                Join as Supplier
                <ArrowUpRight className="ml-2 block sm:hidden" />
              </Button>
              <Button variant="outline" className="size-11 hidden sm:flex rounded-full">
                <ArrowUpRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
