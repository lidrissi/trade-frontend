'use client';

import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, BatteryCharging, Cpu, Plug2 } from 'lucide-react';
import {
  Package,
  Car,
  Shirt,
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

const categories = [
  { icon: Package, label: 'Packaging & Printing' },
  { icon: Car, label: 'Packaging & Printing' },
  { icon: Plug2, label: 'Packaging & Printing' },
  { icon: Shirt, label: 'Packaging & Printing' },
  { icon: Wrench, label: 'Packaging & Printing' },
  { icon: Cpu, label: 'Packaging & Printing' },
  { icon: BatteryCharging, label: 'Packaging & Printing' },
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

function Categories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(Math.min(progress, 100));
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    updateScrollState();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollState);
      window.addEventListener('resize', updateScrollState);
      return () => {
        container.removeEventListener('scroll', updateScrollState);
        window.removeEventListener('resize', updateScrollState);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container px-6 mx-auto bg-white">
      <div className="flex justify-between items-center align-items-center mb-7">
        <h2 className="text-[#1B2846] text-2xl font-medium font-outfit">Explore Categories</h2>
        <div className="hidden sm:flex gap-2 items-end">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="cursor-pointer text-white w-12 h-12 rounded-full  bg-cyan flex items-center justify-center hover:bg-cyan/90 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="cursor-pointer text-white w-12 h-12 rounded-full  bg-cyan flex items-center justify-center hover:bg-cyan/90 transition-colors"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="hover:text-white bg-brand-light1 rounded-3xl px-7 py-4 gap-2 flex flex-col items-center justify-center hover:bg-brand-light cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Icon size={46} className="stroke-[1.5] " />
                <p className="text-[#142F57] hover:text-white text-xs text-center font-medium font-inter">
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>
        {/* Progress Bar */}
        <div className="mt-7 flex items-center gap-4">
          <div className="flex-1 h-1.5 bg-[#F7F7F7] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r bg-[#5378FF] rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
