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
    <div className="mx-auto bg-white">
      <div className="grid lg:grid-cols-[1fr_auto] gap-8 p-8 lg:p-12">
        {/* Hero Section */}
        <div className="bg-[#1e1e1e] rounded-3xl p-12 lg:p-16 flex items-center">
          <h1 className="text-[#ffffff] text-4xl font-bold leading-tight">
            Browse a diverse catalogue, designed for international businesses
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col justify-between min-w-[400px]">
          <div>
            <h2 className="text-[#000000] text-3xl font-bold mb-8">Explorez le catalogue</h2>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="text-[#000000] text-lg font-medium underline underline-offset-4 decoration-2">
                All categories
              </a>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <button className="w-14 h-14 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#f7f7f7] transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-full border-2 border-[#000000] flex items-center justify-center hover:bg-[#f7f7f7] transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-8 lg:px-12 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-[#f7f7f7] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-[#ececec] transition-colors cursor-pointer"
              >
                <Icon size={46} className="stroke-[1.5]" />
                <p className="text-[#000000] text-xs text-center font-medium">{category.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
