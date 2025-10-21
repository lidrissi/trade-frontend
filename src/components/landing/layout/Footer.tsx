import { ArrowUpRight, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingFooter() {
  return (
    <>
      <div className="flex flex-col font-inter">
        <section className="mx-16 bg-[#505050] px-20 py-8 md:py-10 rounded-2xl translate-y-1/2">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-white text-3xl md:text-4xl font-medium mb-4 font-outfit">
                Ready to Start Trade Journey?
              </h1>
              <p className="text-[#d6dce5] text-base font-normal font-inter">
                Join thousands of businesses already trading authentic Moroccan products
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="flex">
                <Button variant="outline" size={'lg'} className="rounded-full px-12">
                  Je suis Acheteur
                </Button>
                <Button size="icon-lg" className="rounded-full bg-black text-white">
                  <ArrowUpRight />
                </Button>
              </div>
              <div className="flex">
                <Button variant="outline" size={'lg'} className="rounded-full px-12">
                  Je suis Vendeur
                </Button>
                <Button size="icon-lg" className="rounded-full bg-black text-white">
                  <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-[#ececec] px-6 py-12 mt-auto font-satoshi">
          <div className="max-w-7xl mx-auto mt-20">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-black mb-4">Trade.ma</h2>
                <p className="text-black text-sm leading-relaxed mb-6">
                  We have clothes that suits your style and which you're proud to wear. From women to men.
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
              <div>
                <h3 className="hidden sm:block text-black font-medium text-sm tracking-wider mb-6">COMPANY</h3>
                <ul className="flex flex-row justify-center gap-4 sm:flex-col">
                  {['About', 'Features', 'Works', 'Career'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-black text-base transition-colors font-normal">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help Column */}
              <div className="hidden sm:block">
                <h3 className="text-black font-semibold text-sm tracking-wider mb-6">HELP</h3>
                <ul className="space-y-4">
                  {['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-black text-base transition-colors font-normal">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden sm:block">
                <h3 className="text-black font-semibold text-sm tracking-wider mb-6">FAQ</h3>
                <ul className="space-y-4">
                  {['Account', 'Manage Deliveries', 'Orders', 'Payments'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-black text-base transition-colors font-normal">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="hidden sm:block">
                <h3 className="text-black font-semibold text-sm tracking-wider mb-6">RESOURCES</h3>
                <ul className="space-y-4">
                  {['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-black text-base transition-colors font-normal">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-8 border-t border-[#d6dce5] flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-black text-xs">Trade © {new Date().getFullYear()}, All Rights Reserved</p>
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-sm">
                  <img src="/images/payment/visa.svg" alt="Visa" className="h-3" />
                </div>
                <div className="bg-white p-2 rounded-sm">
                  <img src="/images/payment/mastercard.svg" alt="Mastercard" className="h-3" />
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
