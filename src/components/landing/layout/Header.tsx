import { Button } from '@/components/ui/button';
import { ArrowUpRight, CircleUser, CircleUserRound, Globe, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="border-b border-[#e5e5e5] bg-[#ffffff]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex  items-center justify-between text-black ">
          <Link href="/" className="text-[22px] font-black font-inter tracking-[-2%]  ">
            Trade.ma
          </Link>
          <nav className="flex items-center font-work-sans text-base font-medium gap-3">
            <Link href="/" className=" hover:opacity-70 transition-opacity">
              Home
            </Link>
            <span className="">|</span>
            <Link href="/buyer-central" className=" hover:opacity-70 transition-opacity">
              Buyer Central
            </Link>
            <span className="">|</span>
            <Link href="/help" className=" hover:opacity-70 transition-opacity">
              Help Center
            </Link>
            <span className="">|</span>
            <Link href="/supplier" className=" hover:opacity-70 transition-opacity">
              Become a supplier
            </Link>
          </nav>
          <div className="flex items-center gap-6 font-work-sans text-base">
            <button className="flex items-center gap-2  hover:opacity-70 transition-opacity">
              <Globe className="w-6 h-6" />
              <span className="font-medium">EN</span>
            </button>

            <button className=" hover:opacity-70 transition-opacity">
              <ShoppingCart className="w-6 h-6" />
            </button>

            <button className="flex items-center gap-2  hover:opacity-70 transition-opacity">
              <CircleUserRound className="w-6 h-6" />
              <span>Sign in</span>
            </button>

            <Button variant="default" size="lg" className="rounded-full  flex items-center">
              Create account
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
