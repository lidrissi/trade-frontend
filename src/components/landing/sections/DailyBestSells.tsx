import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowUpRight, Bookmark, MoveRight, Star } from "lucide-react";

export default function DailyBestSells() {
  const navItems = [
    { name: "All", id: 1 },
    { name: "Building Machinery", id: 2 },
    { name: "Electronic Components", id: 3 },
    { name: "Renewable Energy", id: 4 },
  ];

  return (
    <>
      <div className="font-outfit container mx-auto my-6 rounded-b-3xl bg-white px-6">
        <nav>
          <div className="mx-auto flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">
                Daily Best Sells
              </h1>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={clsx(
                    "font-quicksand text-base font-semibold text-[#253D4E]",
                    item.id === 1 && "text-cyan",
                  )}
                >
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <aside className="flex flex-row justify-between rounded-2xl bg-[#3B54DA] text-white md:flex-col">
            <div className="m-auto px-5 sm:px-10">
              <h1 className="text-xl font-bold sm:text-3xl">
                Explore a Diverse Industrial Catalogue
              </h1>
            </div>
            <div className="bg-brand-light1 flex-shrink-1 rounded-2xl p-8 text-[#000000]">
              <h2 className="mb-6 text-lg font-bold text-nowrap">
                Explore the catalog
              </h2>
              <nav className="space-y-2">
                <a
                  href="#"
                  className="flex items-center gap-3 text-base font-medium text-nowrap underline hover:no-underline"
                >
                  <span> All Categories</span>
                  <MoveRight size={16} />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-base font-medium underline hover:no-underline"
                >
                  <span> All Products</span>
                  <MoveRight size={16} />
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-base font-medium underline hover:no-underline"
                >
                  <span> All Suppliers</span>
                  <MoveRight size={16} />
                </a>
              </nav>
            </div>
          </aside>
          <div className="bg-brand-light1 flex flex-col overflow-hidden rounded-3xl">
            <div
              className="bg-brand-light1 relative flex h-65 items-center justify-center rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/home/best-sells/best-sells-1.png')`,
              }}
            >
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Badge
                  variant={"default"}
                  className="font-outfit rounded-full text-xs"
                >
                  Verified
                </Badge>
                <Badge
                  variant={"secondary"}
                  className="font-outfit rounded-full"
                >
                  In stock
                </Badge>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8 pt-10">
              <h3 className="mb-3 text-lg font-semibold text-[#1B2254]">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="font-inter mb-4 text-xs leading-relaxed font-light text-[#1B2254]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="mb-2 text-base font-semibold text-[#314068]">
                455 DH- 699 DH{" "}
                <span className="text-sm font-normal text-[#6d6a6a]">
                  / unit
                </span>
              </div>
              <div className="mb-4 flex items-center gap-1 text-xs font-normal">
                <Star className="h-3 w-3 fill-[#FFB938] text-[#FFB938]" />
                <span>4,7</span>
                <span className="font-normal text-[#6d6a6a]">Lorem ipsum</span>
              </div>
              <div className="mt-auto">
                <div className="flex gap-1">
                  <Button className="bg-cyan hover:bg-cyan/90 rounded-full text-xs font-medium text-white">
                    Request Quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="link" className="font-underline text-xs">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1">
            <div className="bg-brand-light1 relative flex min-h-35 flex-col justify-end overflow-hidden rounded-3xl bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_50%),url('/images/home/best-sells/best-sells-3.png')] bg-cover bg-center bg-no-repeat md:min-h-65">
              <div className="absolute top-6 right-6 z-10">
                <Bookmark className="h-6 w-6 fill-[#FFB938] text-[#FFB938]" />
              </div>
              <h3 className="p-6 text-lg font-semibold text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur{" "}
              </h3>
            </div>
            <div className="bg-brand-light1 bg-cente relative flex min-h-35 flex-col justify-end overflow-hidden rounded-3xl bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,transparent_50%),url('/images/home/best-sells/best-sells-4.png')] bg-cover bg-no-repeat md:min-h-65">
              <div className="absolute top-6 right-6 z-10">
                <Bookmark className="h-6 w-6 fill-[#FFB938] text-[#FFB938]" />
              </div>
              <h3 className="p-6 text-lg font-semibold text-white">
                Lorem ipsum dolor sit amet consectetur{" "}
              </h3>
            </div>
          </div>
          <div className="bg-brand-light1 flex flex-col overflow-hidden rounded-3xl">
            <div
              className="bg-brand-light1 relative flex h-65 items-center justify-center rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/home/best-sells/best-sells-2.png')`,
              }}
            >
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Badge
                  variant={"default"}
                  className="font-outfit rounded-full text-xs"
                >
                  Verified
                </Badge>
                <Badge
                  variant={"secondary"}
                  className="font-outfit rounded-full"
                >
                  In stock
                </Badge>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-8 pt-10">
              <h3 className="mb-3 text-lg font-semibold text-[#1B2254]">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="font-inter mb-4 text-xs leading-relaxed font-light text-[#1B2254]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
              <div className="mb-2 text-base font-semibold text-[#314068]">
                455 DH- 699 DH{" "}
                <span className="text-sm font-normal text-[#6d6a6a]">
                  / unit
                </span>
              </div>
              <div className="mb-4 flex items-center gap-1 text-xs font-normal">
                <Star className="h-3 w-3 fill-[#FFB938] text-[#FFB938]" />
                <span>4,7</span>
                <span className="font-normal text-[#6d6a6a]">Lorem ipsum</span>
              </div>
              <div className="mt-auto">
                <div className="flex gap-1">
                  <Button className="bg-cyan hover:bg-cyan/90 rounded-full text-xs font-medium text-white">
                    Request Quote
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="link" className="font-underline text-xs">
                    Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 w-full bg-[#1E1B68]">
        <div className="rounded-b-5xl h-14 bg-white" />
      </div>
    </>
  );
}
