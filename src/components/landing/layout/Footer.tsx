import Logo from "@/components/landing/layout/header/Logo";
import { getNavigation } from "@/data/navigation";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default async function LandingFooter() {
  const navigationLinks = await getNavigation();

  return (
    <footer className="font-inter flex flex-col">
      <div className="font-satoshi bg-[#D4DBFF] px-6 py-12">
        <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            <div className="col-span-4 flex flex-col items-center justify-center gap-6 lg:col-span-1 lg:items-start">
              <Logo />
              <p className="text-black-600 text-center text-sm leading-relaxed sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed
                euismod nunc non.
              </p>
              <div className="flex gap-3">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#081228] hover:text-white">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#081228] hover:text-white">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#081228] hover:text-white">
                  <Instagram className="h-4 w-4" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-[#081228] hover:text-white">
                  <Github className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="col-span-4 hidden flex-row justify-between lg:flex">
              {[
                {
                  title: "Company",
                  items: ["About", "Features", "Works", "Career"],
                },
                {
                  title: "Help",
                  items: [
                    "Customer Support",
                    "Delivery Details",
                    "Terms & Conditions",
                    "Privacy Policy",
                  ],
                },
                {
                  title: "FAQ",
                  items: ["Account", "Manage Deliveries", "Orders", "Payments"],
                },
                {
                  title: "Resources",
                  items: [
                    "Free eBooks",
                    "Development Tutorial",
                    "How to - Blog",
                    "Youtube Playlist",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="font-poppins">
                  <h3 className="mb-6 text-base font-semibold tracking-wider text-[#081228]">
                    {item.title}
                  </h3>
                  <ul className="flex flex-row justify-center gap-4 sm:flex-col">
                    {item?.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-base font-light text-[#081228] transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden h-[1px] w-full bg-[#0000001A] md:block" />
          <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
            <p className="font-inter text-xs text-[#00000099]">
              Trade © {new Date().getFullYear()}, All Rights Reserved
            </p>
            <div className="flex flex-row items-center gap-3 md:hidden">
              <img
                className="h-8 rounded-sm"
                src="/images/home/store/app-store.png"
                alt="app-store"
              />
              <img
                className="h-8 rounded-sm"
                src="/images/home/store/google-play.png"
                alt="google-play"
              />
            </div>
            <div className="flex flex-row items-center gap-3">
              <span className="font-inter hidden text-xs font-normal text-[#081228] xl:block">
                Trade on the go with the
                <span className="font-semibold"> Trade.ma</span> app
              </span>
              <img
                className="hidden h-7 rounded-sm md:block"
                src="/images/home/store/app-store.png"
                alt="app-store"
              />
              <img
                className="hidden h-7 rounded-sm md:block"
                src="/images/home/store/google-play.png"
                alt="google-play"
              />
              <div className="rounded-sm bg-white p-2">
                <img
                  src="/images/payment/visa.svg"
                  alt="Visa"
                  className="h-auto md:h-3"
                />
              </div>
              <div className="rounded-sm bg-white p-2">
                <img
                  src="/images/payment/mastercard.svg"
                  alt="Mastercard"
                  className="h-auto md:h-3"
                />
              </div>
              <div className="rounded-sm bg-white p-2">
                <img
                  src="/images/payment/paypal.svg"
                  alt="PayPal"
                  className="h-auto md:h-3"
                />
              </div>
              <div className="rounded-sm bg-white p-2">
                <img
                  src="/images/payment/apple-pay.svg"
                  alt="Apple Pay"
                  className="h-auto md:h-3"
                />
              </div>
              <div className="rounded-sm bg-white p-2">
                <img
                  src="/images/payment/google-pay.svg"
                  alt="Google Pay"
                  className="h-auto md:h-3"
                />
              </div>
            </div>
            <nav className="font-work-sans flex items-center gap-2 font-medium sm:hidden">
              {navigationLinks.map(({ id, name, href }, index) => (
                <Fragment key={id}>
                  <Link
                    href={href || "#"}
                    className="font-roboto text-xs font-medium transition-opacity duration-200 hover:opacity-70"
                  >
                    {name}
                  </Link>
                  {navigationLinks?.length - 1 !== index && (
                    <span className="">|</span>
                  )}
                </Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
