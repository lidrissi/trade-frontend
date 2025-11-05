import { Button } from "@/components/ui/button";
import { Search, ArrowUpRight, ImagePlusIcon } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative mb-14 w-full py-30">
      <div className="absolute inset-0 -z-10 w-full">
        <Image
          fill
          sizes="100vw, 100vw"
          className="rounded-b-5xl absolute h-full w-full object-cover"
          src={"/images/home/hero.png"}
          alt="hero"
        />
      </div>
      <div className="container mx-auto px-6">
        <div className="flex max-w-4xl flex-col gap-12">
          <h1 className="leading-6xl font-outfit text-3xl font-semibold text-white sm:text-6xl">
            The Moroccan <span className="text-cyan">B2B</span> solution to
            boost your exports
          </h1>
          <div className="hidden sm:block">
            <div className="flex items-center gap-3 rounded-full bg-[#ffffff] p-1.5 shadow-sm">
              <input
                type="text"
                placeholder="What are you looking for ?"
                className="flex-1 border-0 bg-transparent px-6 text-base focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-0"
              />
              <button className="p-2 transition-opacity hover:opacity-70">
                <ImagePlusIcon className="h-6 w-6 text-black" />
              </button>
              <Button
                size={"lg"}
                className="font-inter bg-cyan hover:bg-cyan/90 w-40 rounded-full"
              >
                <Search className="h-4 w-4" />
                <span className="ms-2">Search </span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-outfit hidden text-xl font-medium text-white sm:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex">
              <Button className="font-inter font-base bg-cyan hover:bg-cyan/90 gap-1.5 rounded-full px-3 text-base has-[>svg]:px-2.5 sm:h-11 sm:px-6 sm:has-[>svg]:px-8">
                Explore Products
                <ArrowUpRight size={24} className="ml-2 block" />
              </Button>
            </div>
            <div className="flex">
              <Button
                color="white"
                variant="default"
                className="font-inter gap-1.5 rounded-full px-4 text-base has-[>svg]:px-4 sm:h-11 sm:px-8 sm:has-[>svg]:px-8"
              >
                Join as Supplier
                <ArrowUpRight size={24} className="ml-2 block" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
