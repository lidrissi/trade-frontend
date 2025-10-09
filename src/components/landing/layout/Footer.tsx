import { ArrowUpRight, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LandingFooter() {
  return (
    <div className="flex flex-col">
      <section className="mx-16 bg-[#505050] px-6 py-16 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-white text-4xl md:text-5xl font-medium mb-4">Ready to Start Trade Journey?</h1>
            <p className="text-[#d6dce5] text-lg">
              Join thousands of businesses already trading authentic Moroccan products
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <Button className="bg-white text-black hover:bg-[#ececec] rounded-full px-8 py-6 text-base font-medium flex items-center justify-between gap-4 min-w-[280px]">
              <span>Je suis Acheteur</span>
              <div className="bg-black rounded-full p-1.5">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Button>
            <Button className="bg-white text-black hover:bg-[#ececec] rounded-full px-8 py-6 text-base font-medium flex items-center justify-between gap-4 min-w-[280px]">
              <span>Je suis Vendeur</span>
              <div className="bg-black rounded-full p-1.5">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Button>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#ececec] px-6 py-12 mt-auto">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1 text-center">
              <h2 className="text-2xl font-bold text-black mb-4">Trade.ma</h2>
              <p className="text-[#505050] text-sm leading-relaxed mb-6">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex justify-center gap-3">
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

            {/* Company Column */}
            <div>
              <h3 className="hidden sm:block text-black font-semibold text-sm tracking-wider mb-6">COMPANY</h3>
              <ul className="flex flex-row justify-center gap-4 sm:flex-col">
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Column */}
            <div className="hidden sm:block">
              <h3 className="text-black font-semibold text-sm tracking-wider mb-6">HELP</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ Column */}
            <div className="hidden sm:block">
              <h3 className="text-black font-semibold text-sm tracking-wider mb-6">FAQ</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Payments
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="hidden sm:block">
              <h3 className="text-black font-semibold text-sm tracking-wider mb-6">RESOURCES</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Free eBooks
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Development Tutorial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    How to - Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#505050] hover:text-black transition-colors text-sm">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-[#d6dce5] flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[#505050] text-sm">Trade © 2025, All Rights Reserved</p>
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
  );
}
