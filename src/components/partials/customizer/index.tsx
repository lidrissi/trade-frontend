import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icon } from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorSchema from "./color-schema";
import SetSkin from "./set-skin";
import MenuHidden from "./menu-hidden";
import SearchBarToggle from "./search-bar-toggle";
import TeamSwitcherToggle from "./team-switcher-toggle";
import SetContentWidth from "./set-content-width";
import SetLayout from "./set-layout";
import SetSidebar from "./set-sidebar";
import SidebarColor from "./sidebar-color";
import HeaderColor from "./header-color";
import SidebarBg from "./sidebar-bg";
import HeaderStyle from "./header-style";
import FooterStyle from "./footer-style";
import ResetConfig from "./reset-config";
import FullScreenToggle from "./full-screen";
// import CopyCustomizer from "./copy-cutomizer";
import BuyButton from "./buy-button";

const ThemeCustomize = ({}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          className="bg-default-800 dark:bg-default-300 dark:text-default-800 text-default-50 fixed end-0 top-1/2 z-40 flex translate-y-1/2 rotate-90 transform items-center rounded px-2 py-2 text-sm font-medium shadow-md md:-end-10"
        >
          <Icon icon="clarity:settings-line" className="animate-spin text-lg" />
          <span className="ms-2.5 hidden md:inline-block">Settings</span>
        </button>
      </SheetTrigger>
      <SheetContent
        overlayClass=" bg-transparent "
        className="dark:border-default-300 z-[999] w-full max-w-full px-6 pt-0 pb-6 md:max-w-sm lg:w-3/4 dark:border-r"
      >
        <SheetHeader className="-mx-6 px-6 py-4 text-start shadow-xs md:shadow-none">
          <SheetTitle className="flex items-start justify-between rtl:flex-row-reverse">
            <div className="flex-1">
              <p className="text-default-700 text-base font-medium">
                Template Customizer
              </p>
              <p className="text-default-500 dark:text-default-600 text-xs font-normal">
                Customize and preview in real time
              </p>
            </div>
            <div className="flex flex-none gap-2 ps-2">
              {/* <CopyCustomizer /> */}
              <ResetConfig />
            </div>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription className="hidden"></SheetDescription>
        <ScrollArea className="-mx-6 h-[calc(100%-120px)]">
          <div className="mt-3 space-y-8">
            <Tabs defaultValue="style" className="w-full">
              <TabsList className="border-default-200 dark:border-default-300 w-full gap-0 divide-x rounded-none border border-solid p-0">
                <TabsTrigger
                  className="data-[state=active]:bg-default-200 dark:data-[state=active]:bg-secondary data-[state=active]:text-default-900 dark:text-secondary-foreground flex-1 cursor-pointer py-3 shadow-none"
                  value="style"
                >
                  Theme Style
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-default-200 dark:data-[state=active]:bg-secondary data-[state=active]:text-default-900 dark:text-secondary-foreground flex-1 cursor-pointer py-3 shadow-none"
                  value="color"
                >
                  Theme Color
                </TabsTrigger>
              </TabsList>
              <TabsContent
                value="style"
                className="divide-default-300 divide-y p-6"
              >
                <div className="space-y-6 pb-6">
                  <ColorSchema />
                  <SetSkin />
                </div>
                <div className="-mx-6 space-y-6 p-6">
                  <SetLayout />
                  <SetSidebar />
                  <div className="space-y-3">
                    <MenuHidden />
                    <SearchBarToggle />
                    <TeamSwitcherToggle />
                  </div>
                  <SetContentWidth />
                </div>
                <HeaderStyle />
                <FooterStyle />
                <div className="-mx-6 border-t-0! p-6 pb-0">
                  <FullScreenToggle />
                </div>
              </TabsContent>
              <TabsContent
                value="color"
                className="divide-default-300 divide-y px-6"
              >
                <SidebarColor />
                <HeaderColor />
                <SidebarBg />
                <div className="-mx-6 border-t-0! p-6">
                  <FullScreenToggle />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
        <SheetFooter className="flex justify-between gap-2 lg:gap-3 lg:py-4">
          <BuyButton />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ThemeCustomize;
