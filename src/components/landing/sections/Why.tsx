import { ImageIcon } from 'lucide-react';

export default function Why() {
  return (
    <main className=" bg-[#ffffff] py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-2">Why choose Trade.ma ?</h1>
        <p className="text-lg">We connect buyers with authentic Moroccan suppliers</p>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center justify-start rounded-3xl bg-[#242424] px-8 py-16 transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <h2 className="text-xl font-bold text-white">Verified Suppliers</h2>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#dcdcdc] px-8 py-16 transition-all duration-500 delay-75 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <ImageIcon className="h-12 w-12 text-[#3f3e3e]" strokeWidth={1.5} />
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#363535] px-8 py-16 transition-all duration-500 delay-150 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <div className="h-12 w-12" />
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#dcdcdc] px-8 py-16 transition-all duration-500 delay-225 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <ImageIcon className="h-12 w-12 text-[#3f3e3e]" strokeWidth={1.5} />
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center rounded-3xl bg-[#dcdcdc] px-8 py-16 transition-all duration-500 delay-300 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <ImageIcon className="h-12 w-12 text-[#3f3e3e]" strokeWidth={1.5} />
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#3c3737] px-8 py-16 transition-all duration-500 delay-375 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <h2 className="text-xl font-bold text-white">Global Shipping</h2>
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#dcdcdc] px-8 py-16 transition-all duration-500 delay-450 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <ImageIcon className="h-12 w-12 text-[#3f3e3e]" strokeWidth={1.5} />
          </div>
          <div className="flex items-center justify-center rounded-3xl bg-[#242424] px-8 py-16 transition-all duration-500 delay-525 ease-out hover:scale-105 hover:shadow-xl skew-x-12">
            <h2 className="text-xl font-bold text-white">Competitive Price</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
