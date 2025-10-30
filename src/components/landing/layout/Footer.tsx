import Logo from '@/components/Logo';
import { getNavigation } from '@/data/navigation';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export default async function LandingFooter() {
  const navigationLinks = await getNavigation();

  return (
    <footer className="flex flex-col font-inter mt-10">
      <div className="bg-[#D4DBFF] px-6 py-12 font-satoshi">
        <div className="max-w-7xl mx-auto mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
            <div className="md:col-span-1 flex flex-col gap-6 justify-center items-center sm:items-start">
              <Logo />
              <p className="text-black-600 text-sm leading-relaxed text-center sm:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed euismod nunc non.
              </p>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#f0f0f0] transition-colors">
                  <Twitter className="w-4 h-4 text-black" />
                </button>
                <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-[#262b2f] transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#f0f0f0] transition-colors">
                  <Instagram className="w-4 h-4 text-black" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#f0f0f0] transition-colors">
                  <Github className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
            <div className="col-span-4 flex flex-row justify-between">
              {[
                {
                  title: 'Company',
                  items: ['About', 'Features', 'Works', 'Career'],
                },
                {
                  title: 'Help',
                  items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
                },
                {
                  title: 'FAQ',
                  items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
                },
                {
                  title: 'Resources',
                  items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
                },
              ].map((item) => (
                <div key={item.title} className="hidden sm:block font-poppins">
                  <h3 className="text-[#081228] font-semibold text-base tracking-wider mb-6">{item.title}</h3>
                  <ul className="flex flex-row justify-center gap-4 sm:flex-col">
                    {item?.items.map((item) => (
                      <li key={item}>
                        <a href="#" className="text-[#081228] text-base transition-colors font-light">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block h-[1px] w-full bg-[#0000001A]" />
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
            <p className="text-[#00000099] text-xs font-inter">
              Trade © {new Date().getFullYear()}, All Rights Reserved
            </p>
            <div className="flex items-center flex-row  gap-3">
              <span className="hidden sm:block text-[#081228] text-xs font-inter font-normal">
                Trade on the go with the
                <span className="font-semibold"> Trade.ma</span> app
              </span>
              <img className="hidden sm:block h-7 rounded-sm" src="/images/home/store/app-store.png" alt="app-store" />
              <img
                className="hidden sm:block h-7 rounded-sm"
                src="/images/home/store/google-play.png"
                alt="google-play"
              />
              <div className="bg-white p-2 rounded-sm">
                <img src="/images/payment/visa.svg" alt="Visa" className="h-3" />
              </div>
              <div className="bg-white p-2 rounded-sm grow-1">
                <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-3 " />
              </div>
              <div className="bg-white p-2 rounded-sm">
                <img src="/images/payment/paypal.svg" alt="PayPal" className="h-3" />
              </div>
              <div className="bg-white p-2 rounded-sm">
                <img src="/images/payment/apple-pay.svg" alt="Apple Pay" className="h-3" />
              </div>
              <div className="bg-white p-2 rounded-sm">
                <img src="/images/payment/google-pay.svg" alt="Google Pay" className="h-3" />
              </div>
            </div>
            <nav className="flex sm:hidden items-center font-work-sans font-medium gap-2">
              {navigationLinks.map(({ id, name, href }, index) => (
                <Fragment key={id}>
                  <Link
                    href={href || '#'}
                    className="hover:opacity-70 text-xs transition-opacity duration-200 font-medium font-roboto"
                  >
                    {name}
                  </Link>
                  {navigationLinks?.length - 1 !== index && <span className="">|</span>}
                </Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
