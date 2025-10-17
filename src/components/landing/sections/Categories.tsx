import {
  ChevronLeft,
  ChevronRight,
  Package,
  Car,
  Shirt,
  Cookie,
  Wrench,
  Home,
  Ruler,
  Bed,
  Diamond,
  ShoppingBag,
  Gift,
  Lightbulb,
  SprayCan as Spray,
  Sprout,
  MoveRight,
} from 'lucide-react';

export default function Categories() {
  const categories = [
    { icon: Package, label: 'Packaging & Printing' },
    { icon: Car, label: 'Packaging & Printing' },
    { icon: Shirt, label: 'Packaging & Printing' },
    { icon: Shirt, label: 'Packaging & Printing' },
    { icon: Wrench, label: 'Packaging & Printing' },
    { icon: Cookie, label: 'Packaging & Printing' },
    { icon: Home, label: 'Packaging & Printing' },
    { icon: Ruler, label: 'Packaging & Printing' },
    { icon: Package, label: 'Packaging & Printing' },
    { icon: Home, label: 'Packaging & Printing' },
    { icon: Ruler, label: 'Packaging & Printing' },
    { icon: Bed, label: 'Packaging & Printing' },
    { icon: Diamond, label: 'Packaging & Printing' },
    { icon: ShoppingBag, label: 'Packaging & Printing' },
    { icon: Gift, label: 'Packaging & Printing' },
    { icon: Lightbulb, label: 'Packaging & Printing' },
    { icon: Spray, label: 'Packaging & Printing' },
    { icon: Sprout, label: 'Packaging & Printing' },
  ];

  return (
    <div className="container px-6 mx-auto bg-white">
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 py-8 lg:py-8">
        <div className="sm:bg-[#0F0E0E] rounded-3xl p-10 lg:p-10 flex items-center">
          <h1 className="text-sm sm:text-white sm:text-3xl font-bold font-outfit">
            Browse a diverse catalogue, designed for international businesses
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-row justify-between  bg-[#0C0C0C] sm:bg-[#F7F7F7] rounded-3xl p-10">
          <div className="flex flex-col justify-between">
            <h2 className="hidden sm:block text-black text-xl font-semibold mb-8 font-outfit">Explorez le catalogue</h2>
            <div className="flex items-center gap-4 mb-2">
              <a
                href="#"
                className="text-white sm:text-[#393737] text-lg font-medium underline underline-offset-4 decoration-2 font-inter"
              >
                All categories
              </a>
              <MoveRight className="w-6 h-6" />
            </div>
          </div>
          <div className="flex gap-1 items-end">
            <button className="w-12 h-12 rounded-full border-1 border-[#1E1E1E] flex items-center justify-center hover:bg-[#f7f7f7] transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full border-1 border-[#1E1E1E] flex items-center justify-center hover:bg-[#f7f7f7] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="inverted-radius-pseudo bg-gradient-to-r from-cyan-500 to-blue-500 h-64 flex items-center justify-center relative">
        <span className="text-white font-bold text-xl">Inverted Radius</span>
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-2xl p-4 gap-2 flex flex-col items-center justify-center hover:bg-[#ececec] transition-colors cursor-pointer"
            >
              <Icon size={46} className="stroke-[1.5]" />
              <p className="text-black text-xs text-center font-medium font-inter">{category.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
