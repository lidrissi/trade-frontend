import { Globe, ShoppingCart, User, Search, ArrowUpRight, ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="bg-[#ffffff]">
      <div className="bg-[#e8e8e8] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-6xl font-bold text-[#000000] mb-12 leading-tight">
              The Moroccan B2B solution to boost your exports
            </h1>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="flex items-center gap-3 bg-[#ffffff] rounded-full p-2 shadow-sm">
                <input
                  type="text"
                  placeholder="Qu'est-ce que tu cherches"
                  className="flex-1 border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <button className="p-2 hover:opacity-70 transition-opacity">
                  <ImageIcon className="w-5 h-5 text-[#000000]" />
                </button>
                <button className="bg-[#1a0f0c] text-[#ffffff] hover:bg-[#151515] rounded-full px-8 py-3 flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Search
                </button>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-[#1a0f0c] text-[#ffffff] hover:bg-[#151515] rounded-full px-6 py-3 text-base flex items-center gap-3">
                Explore Products
                <div className="bg-[#ffffff] rounded-full p-1.5">
                  <ArrowUpRight className="w-4 h-4 text-[#1a0f0c]" />
                </div>
              </button>

              <button className="bg-[#ffffff] text-[#000000] border-[#000000] hover:bg-[#f5f5f5] rounded-full px-6 py-3 text-base flex items-center gap-3">
                Join as Supplier
                <div className="bg-[#1a0f0c] rounded-full p-1.5">
                  <ArrowUpRight className="w-4 h-4 text-[#ffffff]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
