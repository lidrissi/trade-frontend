import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Cta() {
  return (
    <main className="font-outfit container mx-auto px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl shadow-lg lg:row-span-2">
          <div className="relative flex h-full min-h-60 flex-col justify-end bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,transparent_50%),url('/images/home/cta/cta1.png')] bg-cover bg-center bg-no-repeat p-8">
            <div className="relative z-10">
              <h1 className="mb-4 text-4xl leading-tight font-bold text-white">
                Connect. Collaborate. Grow.
              </h1>
              <p className="text-base font-normal text-white">
                Expand your business network with verified industrial partners
                and trusted export opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#839DFC] to-[#6D8DFF] p-8 shadow-lg md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="z-10 flex-1">
              <h2 className="mb-3 w-3/4 text-2xl leading-tight font-bold text-white md:w-1/2">
                Grow Your Business with Trade.ma
              </h2>
              <p className="mb-6 text-sm text-blue-100">
                A global network of buyers and access new export opportunities.
              </p>
              <div className="flex flex-row items-center gap-4">
                <Button
                  color="white"
                  className="rounded-full text-sm font-medium"
                >
                  Explore Products
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="#"
                  className="text-sm font-normal text-white underline"
                >
                  Need Help
                </a>
              </div>
            </div>

            <Image
              className="absolute right-0 bottom-0 h-auto w-auto"
              alt=""
              width={110}
              height={110}
              src={`/images/home/cta/cta3.png`}
            />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1D2170] to-[#373FD6] p-8 shadow-lg md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="z-10 flex-1">
              <h2 className="mb-3 w-3/4 text-2xl leading-tight font-bold text-white md:w-1/2">
                Discover Verified Industrial Products
              </h2>
              <p className="mb-6 text-sm text-blue-100">
                Materials tailored to your business needs all in one trusted
                marketplace.
              </p>
              <div className="flex flex-row items-center gap-4">
                <Button className="bg-cyan hover:bg-cyan/90 rounded-full text-sm font-medium">
                  Join as a Supplier
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="#"
                  className="text-sm font-normal text-white underline"
                >
                  Need Help
                </a>
              </div>
            </div>

            <Image
              className="absolute right-0 bottom-0 h-auto w-auto"
              alt=""
              width={110}
              height={110}
              src={`/images/home/cta/cta3.png`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
