import { Button } from '@/components/ui/button';
import { ArrowUpRight, Globe, ShoppingCart, UserRound } from 'lucide-react';
import SearchBar from '../../sections/SearchBar';
import { Disclosure } from '@headlessui/react';
import AsideSidebarNavigation from './aside-sidebar-navigation';
import HamburgerBtnMenu from './HamburgerBtnMenu';
import { Navigation } from '../Navigation';
import Logo from '@/components/Logo';

export default function Header() {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="h-full">
      <Disclosure as="nav" className="h-full">
        <AsideSidebarNavigation />
        <div className="max-w-7xl mx-auto px-6 border-b border-[#e5e5e5] bg-[#ffffff] container  py-4">
          <div className="flex  items-center justify-between text-black ">
            <div className="flex items-center gap-4">
              <div className="flex-1 items-center mr-2 flex lg:hidden">
                <HamburgerBtnMenu />
              </div>
              <Logo />
            </div>
            <Navigation />
            <div className="hidden md:flex items-center gap-6 font-work-sans text-sm">
              <button className="flex items-center gap-2  hover:opacity-70 transition-opacity">
                <Globe className="w-5 h-5" />
                <span className="font-medium">EN</span>
              </button>

              <button className=" hover:opacity-70 transition-opacity">
                <ShoppingCart className="w-5 h-5" />
              </button>

              <button className="flex items-center gap-2  hover:opacity-70 transition-opacity font-normal text-sm font-poppins">
                <UserRound className="w-5 h-5" />
                <span>Sign in</span>
              </button>

              <Button className="hidden md:flex font-work-sans font-base gap-1.5 px-3 has-[>svg]:px-2.5 rounded-full bg-cyan sm:h-11 sm:px-6 sm:has-[>svg]:px-8 hover:bg-cyan/90">
                Create account
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center md:hidden gap-1">
              <SearchBar />
              <Button variant="default" size="sm" className="rounded-full bg-cyan hover:bg-cyan/90 items-center">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
