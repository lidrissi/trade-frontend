import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ArrowUpRight, Bookmark, MoveRight, Star } from 'lucide-react';
import Image from 'next/image';

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
        <div className="bg-brand-light1 rounded-3xl overflow-hidden flex flex-col">
          <div
            className="rounded-3xl h-65 bg-brand-light1 flex items-center justify-center relative bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/home/best-sells-1.png')`,
            }}
          >
            <div className="flex flex-col absolute top-4 right-4 gap-2">
              <Badge variant={'default'} className="rounded-full font-outfit text-xs">
                Verified
              </Badge>
              <Badge variant={'secondary'} className="rounded-full font-outfit">
                In stock
              </Badge>
            </div>
          </div>
          <div className="p-8 pt-10 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-[#1B2254]">Lorem ipsum dolor sit amet</h3>
            <p className="text-[#1B2254] text-xs mb-4 leading-relaxed font-inter font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. 
            </p>
            <div className="text-base font-semibold mb-2 text-[#314068]">
              455 DH- 699 DH <span className="text-sm font-normal text-[#6d6a6a]">/ unit</span>
            </div>
            <div className="flex items-center gap-1 mb-4 text-xs font-normal">
              <Star className="w-3 h-3 fill-[#FFB938] text-[#FFB938]" />
              <span>4,7</span>
              <span className=" text-[#6d6a6a] font-normal">Lorem ipsum</span>
            </div>
            <div className="mt-auto">
              <div className="flex gap-1">
                <Button className="bg-cyan hover:bg-cyan/90 text-white text-xs rounded-full font-medium">
                  Request Quote
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="link" className="text-xs font-underline">
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div
            className=" bg-brand-light1 min-h-65 rounded-3xl overflow-hidden flex flex-col justify-end relative bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/home/best-sells-3.png')`,
            }}
          >
            <div className="absolute top-6 right-6 z-10">
              <Bookmark className="w-6 h-6 fill-[#FFB938] text-[#FFB938]" />
            </div>
            <h3 className="text-lg font-semibold text-white p-6">ffff Lorem ipsum dolor sit amet consectetur </h3>
          </div>
          <div
            className="min-h-65 bg-brand-light1 rounded-3xl overflow-hidden flex flex-col justify-end relative bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/home/best-sells-4.png')`,
            }}
          >
            <div className="absolute top-6 right-6 z-10">
              <Bookmark className="w-6 h-6 fill-[#FFB938] text-[#FFB938]" />
            </div>
            <h3 className="text-lg font-semibold text-white p-6">Lorem ipsum dolor sit amet consectetur </h3>
          </div>
        </div>
        <div className="bg-brand-light1 rounded-3xl overflow-hidden flex flex-col">
          <div
            className="rounded-3xl h-65 bg-brand-light1 flex items-center justify-center relative bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/home/best-sells-2.png')`,
            }}
          >
            <div className="flex flex-col absolute top-4 right-4 gap-2">
              <Badge variant={'default'} className="rounded-full font-outfit text-xs">
                Verified
              </Badge>
              <Badge variant={'secondary'} className="rounded-full font-outfit">
                In stock
              </Badge>
            </div>
          </div>
          <div className="p-8 pt-10 flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-[#1B2254]">Lorem ipsum dolor sit amet</h3>
            <p className="text-[#1B2254] text-xs mb-4 leading-relaxed font-inter font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. 
            </p>
            <div className="text-base font-semibold mb-2 text-[#314068]">
              455 DH- 699 DH <span className="text-sm font-normal text-[#6d6a6a]">/ unit</span>
            </div>
            <div className="flex items-center gap-1 mb-4 text-xs font-normal">
              <Star className="w-3 h-3 fill-[#FFB938] text-[#FFB938]" />
              <span>4,7</span>
              <span className=" text-[#6d6a6a] font-normal">Lorem ipsum</span>
            </div>
            <div className="mt-auto">
              <div className="flex gap-1">
                <Button className="bg-cyan hover:bg-cyan/90 text-white text-xs rounded-full font-medium">
                  Request Quote
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="link" className="text-xs font-underline">
                  Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
