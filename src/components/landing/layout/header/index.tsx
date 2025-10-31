import { Button } from "@/components/ui/button";
import { ArrowUpRight, Globe, ShoppingCart, UserRound } from "lucide-react";
import SearchBar from "../../sections/SearchBar";
import { Disclosure } from "@headlessui/react";
import AsideSidebarNavigation from "./aside-sidebar-navigation";
import HamburgerBtnMenu from "./HamburgerBtnMenu";
import { Navigation } from "../Navigation";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <div className="h-full">
      <Disclosure as="nav" className="h-full">
        <AsideSidebarNavigation />
        <div className="container mx-auto max-w-7xl border-b border-[#e5e5e5] bg-[#ffffff] px-6 py-4">
          <div className="flex items-center justify-between text-black">
            <div className="flex items-center gap-4">
              <div className="mr-2 flex flex-1 items-center lg:hidden">
                <HamburgerBtnMenu />
              </div>
              <Logo />
            </div>
            <Navigation />
            <div className="font-work-sans hidden items-center gap-6 text-sm md:flex">
              <button className="flex items-center gap-2 transition-opacity hover:opacity-70">
                <Globe className="h-5 w-5" />
                <span className="font-medium">EN</span>
              </button>

              <button className="transition-opacity hover:opacity-70">
                <ShoppingCart className="h-5 w-5" />
              </button>

              <button className="font-poppins flex items-center gap-2 text-sm font-normal transition-opacity hover:opacity-70">
                <UserRound className="h-5 w-5" />
                <span>Sign in</span>
              </button>

              <Button className="font-work-sans font-base bg-cyan hover:bg-cyan/90 hidden gap-1.5 rounded-full px-3 has-[>svg]:px-2.5 sm:h-11 sm:px-6 sm:has-[>svg]:px-8 md:flex">
                Create account
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-1 md:hidden">
              <SearchBar />
              <Button
                variant="default"
                size="sm"
                className="bg-cyan hover:bg-cyan/90 items-center rounded-full"
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}
