import { Button } from '@/components/ui/button';
import { ArrowUpRight, CircleUserRound, Globe, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import SearchBar from '../../sections/SearchBar';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import AsideSidebarNavigation from './aside-sidebar-navigation';
import HamburgerBtnMenu from './HamburgerBtnMenu';

export default function Header() {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    { name: 'Home', href: '#', current: false },
    { name: 'Buyer Central', href: '#', current: true },
    { name: 'Help Center', href: '#', current: false },
    { name: 'Become a supplier', href: '#', current: false },
  ];

  return (
    <div className="h-full">
      <Disclosure as="nav" className="h-full">
        <AsideSidebarNavigation />
        <div className="max-w-7xl mx-auto px-6 border-b border-[#e5e5e5] bg-[#ffffff] container  py-4">
          <div className="flex  items-center justify-between text-black ">
            <div className="flex items-center gap-4">
              <div className="flex flex-1 items-center xl:hidden">
                <div className="-mr-2 flex md:hidden">
                  <HamburgerBtnMenu />
                </div>
              </div>
              <Link href="/" className="text-base md:text-[22px] font-black font-inter tracking-[-2%]  ">
                Trade.ma
              </Link>
            </div>
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

              <Button className="font-inter font-base gap-1.5 px-3 has-[>svg]:px-2.5 rounded-full bg-[#151515] sm:h-11 sm:px-6 sm:has-[>svg]:px-8">
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
        <DisclosurePanel className="md:hidden h-full">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-blue-500 text-white' : 'text-black',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
