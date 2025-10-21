import { Button } from '@/components/ui/button';
import { ArrowUpRight, CircleUserRound, Globe, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../Navigation';
import SearchBar from '../../sections/SearchBar';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MenuIcon, X } from 'lucide-react';
import AsideSidebarNavigation from './aside-sidebar-navigation';

export default function Header() {
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
  }

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
  ];

  return (
    <div className="h-full">
      <AsideSidebarNavigation />
      <Disclosure as="nav" className="h-full">
        <div className="max-w-7xl mx-auto px-6 border-b border-[#e5e5e5] bg-[#ffffff] container  py-4">
          <div className="flex  items-center justify-between text-black ">
            <div className="flex items-center gap-4">
              <div className="flex flex-1 items-center xl:hidden">
                <div className="-mr-2 flex md:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-2 focus:outline-offset-2 focus-visible:outline-0 dark:hover:bg-neutral-700">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <X aria-hidden="true" className="hidden size-6 group-data-open:block" />
                  </DisclosureButton>
                </div>
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
