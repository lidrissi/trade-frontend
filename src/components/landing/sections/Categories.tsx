"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  CarFront,
  Cpu,
  LucideSettings,
  Plane,
  Plug2,
} from "lucide-react";
import {
  Package,
  Shirt,
  Wrench,
  Home,
  Ruler,
  Diamond,
  ShoppingBag,
  Gift,
  Lightbulb,
  SprayCan as Spray,
  Sprout,
} from "lucide-react";

const categories = [
  { icon: Package, label: "Packaging & Printing" },
  { icon: CarFront, label: "Packaging & Printing" },
  { icon: Plug2, label: "Packaging & Printing" },
  { icon: Shirt, label: "Packaging & Printing" },
  { icon: Wrench, label: "Packaging & Printing" },
  { icon: Cpu, label: "Packaging & Printing" },
  { icon: BatteryCharging, label: "Packaging & Printing" },
  { icon: Ruler, label: "Packaging & Printing" },
  { icon: LucideSettings, label: "Packaging & Printing" },
  { icon: Home, label: "Packaging & Printing" },
  { icon: Plane, label: "Packaging & Printing" },
  { icon: Lightbulb, label: "Packaging & Printing" },
  { icon: Diamond, label: "Packaging & Printing" },
  { icon: ShoppingBag, label: "Packaging & Printing" },
  { icon: Gift, label: "Packaging & Printing" },
  { icon: Lightbulb, label: "Packaging & Printing" },
  { icon: Spray, label: "Packaging & Printing" },
  { icon: Sprout, label: "Packaging & Printing" },
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
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto bg-white px-6">
      <div className="align-items-center mb-7 flex items-center justify-between">
        <h2 className="font-outfit text-2xl font-medium text-[#1B2846]">
          Explore Categories
        </h2>
        <div className="hidden items-end gap-2 sm:flex">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="bg-cyan hover:bg-cyan/90 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="bg-cyan hover:bg-cyan/90 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white transition-colors"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="mx-auto">
        <div
          ref={scrollContainerRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-brand-light1 hover:bg-brand-light flex cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl px-7 py-4 transition-all duration-300 hover:scale-105 hover:text-white hover:shadow-lg"
              >
                <Icon size={46} className="stroke-[1.5]" />
                <p className="font-inter text-center text-xs font-medium text-[#142F57] hover:text-white">
                  {category.label}
                </p>
              </div>
            );
          })}
        </div>
        {/* Progress Bar */}
        <div className="mt-7 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F7F7F7]">
            <div
              className="h-full rounded-full bg-[#5378FF] bg-gradient-to-r transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
