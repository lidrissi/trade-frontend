import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ArrowUpRight, Bookmark, Image, MoveRight, Star } from 'lucide-react';

export default function DailyBestSells() {
  const navItems = [
    { name: 'All', id: 1 },
    { name: 'Building Machinery', id: 2 },
    { name: 'Electronic Components', id: 3 },
    { name: 'Renewable Energy', id: 4 },
  ];

  return (
    <div className="container px-6 mx-auto bg-white font-outfit my-6">
      <nav>
        <div className="mx-auto flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black">Daily Best Sells</h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={clsx('text-base font-semibold text-[#253D4E] font-quicksand', item.id === 1 && 'text-cyan')}
              >
                {item?.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <aside className="flex flex-row sm:flex-col justify-between text-white bg-[#3B54DA] rounded-2xl">
          <div className="py-8 sm:px-10">
            <h1 className="text-xl sm:text-3xl font-bold">
              Browse a diverse catalog, designed for international businesses
            </h1>
          </div>
          <div className="mt-2 flex-shrink-1 bg-brand-light1 text-[#000000] p-8 rounded-2xl">
            <h2 className="text-lg font-bold mb-6 text-nowrap">Explore the catalog</h2>
            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-3 text-base font-medium underline hover:no-underline text-nowrap"
              >
                <span> All Categories</span>
                <MoveRight size={16} />
              </a>
              <a href="#" className="flex items-center gap-3 text-base font-medium underline hover:no-underline">
                <span> All Products</span>
                <MoveRight size={16} />
              </a>
              <a href="#" className="flex items-center gap-3 text-base font-medium underline hover:no-underline">
                <span> All Suppliers</span>
                <MoveRight size={16} />
              </a>
            </nav>
          </div>
        </aside>
        <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col">
          <div className="h-40 bg-[#dcdcdc] flex items-center justify-center relative">
            <div className="flex flex-col absolute top-4 right-4 gap-2">
              <Badge variant={'default'} className="rounded-full font-outfit text-xs">
                Verified
              </Badge>
              <Badge variant={'secondary'} className="rounded-full font-outfit">
                In stock
              </Badge>
            </div>
            <Image className="w-16 h-16 text-[#9a9998]" />
          </div>
          <div className="p-8 pt-0 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-[#363431]">Traditional B2B Collection</h3>
            <p className="text-[#6d6a6a] text-xs mb-4 leading-relaxed font-inter font-normal">
              Discover our exclusive collection of traditional Moroccan products specially selected for professionals
              (B2B).
            </p>
            <div className="text-base font-bold mb-2 text-[#000000]">
              455 DH- 699 DH <span className="text-sm font-normal text-[#6d6a6a]">/ unit</span>
            </div>
            <div className="text-xs text-[#363431] mb-3 font-normal">Fez, Morocco</div>
            <div className="flex items-center gap-1 mb-4 text-sm">
              <Star className="w-3 h-3 fill-[#3E3E3E] text-[#000000]" />
              <span className="font-semibold text-[#292826]">4,7</span>
              <span className="text-xs text-[#6d6a6a] font-normal">Moroccan Craft House</span>
            </div>
            <div className="mt-auto">
              <div className="flex gap-1">
                <Button className="bg-cyan hover:bg-cyan/90 text-white text-xs rounded-full font-medium">
                  Request Quote
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-1 border-[#363431] text-[#363431] hover:bg-[#363431] text-xs hover:text-white rounded-full font-medium bg-transparent"
                >
                  Details
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div
            className="bg-[#dcdcdc] min-h-65 rounded-3xl overflow-hidden flex flex-col justify-end relative bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/image.png')`,
              backgroundSize: '47px',
            }}
          >
            <div className="absolute top-6 right-6 z-10">
              <Bookmark className="w-6 h-6 fill-[#000000] text-[#000000]" />
            </div>
            <h3 className="text-lg font-semibold text-[#000000] p-6">Tagines and Ceramics for Professionals</h3>
          </div>
          <div
            className="min-h-65 bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col justify-end relative bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/image.png')`,
              backgroundSize: '47px',
            }}
          >
            <div className="absolute top-6 right-6 z-10">
              <Bookmark className="w-6 h-6 fill-[#000000] text-[#000000]" />
            </div>
            <h3 className="text-lg font-semibold text-[#000000] p-6">Tagines and Ceramics for Professionals</h3>
          </div>
        </div>
        <div className="bg-[#dcdcdc] rounded-3xl overflow-hidden flex flex-col">
          <div className="h-40 bg-[#dcdcdc] flex items-center justify-center relative">
            <div className="flex flex-col absolute top-4 right-4 gap-2">
              <Badge variant={'default'} className="rounded-full font-outfit text-xs">
                Verified
              </Badge>
              <Badge variant={'secondary'} className="rounded-full font-outfit">
                In stock
              </Badge>
            </div>
            <Image className="w-16 h-16 text-[#9a9998]" />
          </div>
          <div className="p-8 pt-0 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-[#363431]">Authentic Moroccan Spices</h3>
            <p className="text-[#6d6a6a] text-xs mb-4 leading-relaxed font-inter font-normal">
              Bring the vibrant heart of Moroccan cuisine to your business. Our wholesale spice collection is sourced
              directly from reliable growers..
            </p>
            <div className="text-base font-bold mb-2 text-[#000000]">
              455 DH- 699 DH <span className="text-sm font-normal text-[#6d6a6a]">/ unit</span>
            </div>
            <div className="text-xs text-[#363431] mb-3 font-normal">Fez, Morocco</div>
            <div className="flex items-center gap-1 mb-4 text-sm">
              <Star className="w-3 h-3 fill-[#3E3E3E] text-[#000000]" />
              <span className="font-semibold text-[#292826]">4,7</span>
              <span className="text-xs text-[#6d6a6a] font-normal">Moroccan Craft House</span>
            </div>
            <div className="mt-auto">
              <div className="flex gap-1">
                <Button className="bg-[#363431] hover:bg-[#464847] text-white text-xs rounded-full font-medium">
                  Request Quote
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-1 border-[#363431] text-[#363431] hover:bg-[#363431] text-xs hover:text-white rounded-full font-medium bg-transparent"
                >
                  Details
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
