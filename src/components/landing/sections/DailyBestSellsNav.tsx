import { Button } from '@/components/ui/button';
import { ArrowUpRight, Bookmark, Star } from 'lucide-react';
import { Fragment } from 'react';

export default function DailyBestSellsNav() {
  const navItems = ['All', 'Deals Of the Day', 'Beauty', 'Cosmetics', 'Textile', 'Agriculture'];

  return (
    <Fragment>
      <nav className="px-12 w-full bg-white">
        <div className="mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#000000]">Daily Best Sells</h1>
          </div>

          <div className="flex items-center gap-4">
            {navItems.map((item, index) => (
              <a key={index} href="#" className="text-base font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="p-12 flex">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <aside className="flex flex-col justify-between text-white bg-[#242424] rounded-2xl">
            <div className="p-12">
              <h1 className="text-3xl font-bold mb-8">
                Browse a diverse catalog, designed for international businesses
              </h1>
            </div>
            <div className="mt-4 flex-shrink-1 bg-[#f7f7f7] text-[#000000] p-12 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6">Explorez le catalogue</h2>
              <nav className="space-y-3">
                <a href="#" className="block text-lg font-medium underline hover:no-underline">
                  All Categories
                </a>
                <a href="#" className="block text-lg font-medium underline hover:no-underline">
                  All Products
                </a>
                <a href="#" className="block text-lg font-medium underline hover:no-underline">
                  All Suppliers
                </a>
              </nav>
            </div>
          </aside>
          <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col">
            <div className="h-40 bg-[#dcdcdc] flex items-center justify-center">
              <div className="w-16 h-16 text-[#9a9998]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-[#000000]">Traditional B2B Collection</h3>
              <p className="text-[#6d6a6a] text-sm mb-4 leading-relaxed">
                Discover our exclusive collection of traditional Moroccan products specially selected for professionals
                (B2B).
              </p>
              <div className="mt-auto">
                <div className="text-2xl font-bold mb-2 text-[#000000]">
                  455 DH- 699 DH <span className="text-sm font-normal text-[#6d6a6a]">/ unit</span>
                </div>
                <div className="text-sm text-[#363431] mb-3">Fez, Morocco</div>
                <div className="flex items-center gap-1 mb-4 text-sm">
                  <Star className="w-4 h-4 fill-[#000000] text-[#000000]" />
                  <span className="font-bold text-[#000000]">4,7</span>
                  <span className="text-[#6d6a6a]">Moroccan Craft House</span>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-[#363431] hover:bg-[#464847] text-white rounded-full px-6 h-12 font-medium">
                    Request Quote
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-[#363431] text-[#363431] hover:bg-[#363431] hover:text-white rounded-full px-6 h-12 font-medium bg-transparent"
                  >
                    Details
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col relative">
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Bookmark className="w-6 h-6 fill-[#000000] text-[#000000]" />
                </div>
              </div>
              <div className="aspect-[4/3] bg-[#dcdcdc] flex items-center justify-center">
                <div className="w-16 h-16 text-[#9a9998]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#000000]">Tagines and Ceramics for Professionals</h3>
              </div>
            </div>
            <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col relative">
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-white rounded-lg p-2 shadow-sm">
                  <Bookmark className="w-6 h-6 fill-[#000000] text-[#000000]" />
                </div>
              </div>
              <div className="aspect-[4/3] bg-[#dcdcdc] flex items-center justify-center">
                <div className="w-16 h-16 text-[#9a9998]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#000000]">Tagines and Ceramics for Professionals</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col">
            <div className="h-40 bg-[#dcdcdc] flex items-center justify-center">
              <div className="w-16 h-16 text-[#9a9998]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 text-[#000000]">Authentic Moroccan Spices</h3>
              <p className="text-[#6d6a6a] text-sm mb-4 leading-relaxed">
                Bring the vibrant heart of Moroccan cuisine to your business. Our wholesale spice collection is sourced
                directly from reliable growers..
              </p>
              <div className="mt-auto">
                <div className="text-2xl font-bold mb-2 text-[#000000]">245 DH - 575 DH</div>
                <div className="text-sm text-[#363431] mb-3">Fez, Morocco</div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-[#000000] text-[#000000]" />
                  <span className="font-bold text-[#000000]">4,7</span>
                  <span className="text-[#6d6a6a]">Moroccan Craft House</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
