import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Cta() {
  return (
    <main className="container mx-auto p-6 font-outfit">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:row-span-2 rounded-3xl overflow-hidden shadow-lg">
          <div className="relative min-h-60 h-full bg-cover  bg-no-repeat bg-center flex flex-col justify-end p-8 bg-[linear-gradient(to_top,rgba(0,0,0,1)_0%,transparent_50%),url('/images/home/cta1.png')]">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight">Connect. Collaborate. Grow.</h1>
              <p className="text-base font-normal text-white">
                Expand your business network with verified industrial partners and trusted export opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-[#839DFC] to-[#6D8DFF] p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1">
              <h2 className="w-1/2 text-2xl font-bold text-white mb-3 leading-tight">
                Grow Your Business with Trade.ma
              </h2>
              <p className="text-blue-100 mb-6 text-sm">
                A global network of buyers and access new export opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button variant={'outline'} className=" text-sm rounded-full font-medium">
                  Explore Products
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <a href="#" className="text-white text-sm underline font-normal">
                  Need Help
                </a>
              </div>
            </div>

            <Image
              className="absolute bottom-0 right-0"
              alt=""
              width={110}
              height={110}
              src={`/images/home/cta3.png`}
            />
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-[#1D2170] to-[#373FD6] p-8 md:p-12 relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex-1">
              <h2 className="w-1/2 text-2xl font-bold text-white mb-3 leading-tight">
                Discover Verified Industrial Products
              </h2>
              <p className="text-blue-100 mb-6 text-sm">
                Materials tailored to your business needs all in one trusted marketplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <Button className="bg-cyan hover:bg-cyan/90 text-sm rounded-full font-medium">
                  Join as a Supplier
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
                <a href="#" className="text-white text-sm underline font-normal">
                  Need Help
                </a>
              </div>
            </div>

            <Image
              className="absolute bottom-0 right-0"
              alt=""
              width={110}
              height={110}
              src={`/images/home/cta3.png`}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
