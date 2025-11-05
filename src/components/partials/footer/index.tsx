import React from "react";
import FooterContent from "./footer-content";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { auth } from "@/lib/auth";

const DashCodeFooter = async () => {
  const session = await auth();
  return (
    <FooterContent>
      <div className="text-default-600 hidden justify-between md:flex">
        <div className="text-center text-sm md:ltr:text-start md:rtl:text-right">
          COPYRIGHT &copy; {new Date().getFullYear()} DashCode, All rights
          Reserved
        </div>
        <div className="text-center text-sm md:ltr:text-right md:rtl:text-end">
          Hand-crafted & Made by{" "}
          <a
            href="https://codeshaper.net"
            target="_blank"
            className="text-primary font-semibold"
          >
            Codeshaper
          </a>
        </div>
      </div>
      <div className="flex items-center justify-around md:hidden">
        <Link href="/app/chat" className="text-default-600">
          <div>
            <span className="relative mb-1 flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px]">
              <Icon icon="heroicons-outline:mail" />
              <span className="absolute -top-2 right-[5px] z-99 flex h-4 w-4 flex-col items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white lg:top-0">
                10
              </span>
            </span>
            <span className="text-default-600 block text-xs">Messages</span>
          </div>
        </Link>
        <Link
          href="profile"
          className="bg-card footer-bg dark:bg-default-300 relative z-[-1] -mt-[40px] flex h-[65px] w-[65px] items-center justify-center rounded-full bg-no-repeat backdrop-blur-[40px] backdrop-filter"
        >
          <div className="custom-dropshadow relative top-[0px] left-[0px] h-[50px] w-[50px] rounded-full">
            <Image
              src={session?.user?.image as string}
              alt={session?.user?.name?.charAt(0) as string}
              width={50}
              height={50}
              className="h-full w-full rounded-full border-2"
            />
          </div>
        </Link>
        <Link href="notifications">
          <div>
            <span className="relative mb-1 flex cursor-pointer flex-col items-center justify-center rounded-full text-[20px]">
              <Icon icon="heroicons-outline:bell" />
              <span className="absolute -top-2 right-[17px] z-99 flex h-4 w-4 flex-col items-center justify-center rounded-full bg-red-500 text-[8px] font-semibold text-white lg:top-0">
                2
              </span>
            </span>
            <span className="text-default-600 block text-xs">
              Notifications
            </span>
          </div>
        </Link>
      </div>
    </FooterContent>
  );
};

export default DashCodeFooter;
