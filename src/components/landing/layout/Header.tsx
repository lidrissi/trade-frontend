import { Button } from '@/components/ui/button';
import { ArrowUpRight, CircleUser, CircleUserRound, Globe, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import HamburgerBtnMenu from './HamburgerBtnMenu';
import { Navigation } from './Navigation';
import SearchBar from '../sections/SearchBar';

export default function LandingHeader() {
  return (
    <header className="border-b border-[#e5e5e5] bg-[#ffffff]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex  items-center justify-between text-black ">
          <div className="flex items-center gap-3">
            <div className="flex flex-1 items-center xl:hidden">
              <HamburgerBtnMenu />
            </div>
            <Link href="/" className="text-base md:text-[22px] font-black font-inter tracking-[-2%]  ">
              Trade.ma
            </Link>
          </div>
          <Navigation />
          <div className="hidden md:flex items-center gap-6 font-work-sans text-base">
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
          <div className="flex items-center md:hidden">
            <SearchBar />
            <Button variant="default" size="sm" className="hidden rounded-full  md:flex items-center">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
