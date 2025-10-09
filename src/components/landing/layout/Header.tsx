import { ArrowUpRight, Globe, ShoppingCart, User, X } from 'lucide-react';
import Link from 'next/link';

export default function LandingHeader() {
  return (
    <header className="border-b border-[#e5e5e5] bg-[#ffffff]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#000000]">
            Trade.ma
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-[#000000] hover:opacity-70 transition-opacity">
              Home
            </Link>
            <span className="text-[#000000]">|</span>
            <Link href="/buyer-central" className="text-[#000000] hover:opacity-70 transition-opacity">
              Buyer Central
            </Link>
            <span className="text-[#000000]">|</span>
            <Link href="/help" className="text-[#000000] hover:opacity-70 transition-opacity">
              Help Center
            </Link>
            <span className="text-[#000000]">|</span>
            <Link href="/supplier" className="text-[#000000] hover:opacity-70 transition-opacity">
              Become a supplier
            </Link>
          </nav>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[#000000] hover:opacity-70 transition-opacity">
              <Globe className="w-5 h-5" />
              <span className="font-medium">EN</span>
            </button>

            <button className="text-[#000000] hover:opacity-70 transition-opacity">
              <ShoppingCart className="w-5 h-5" />
            </button>

            <button className="flex items-center gap-2 text-[#000000] hover:opacity-70 transition-opacity">
              <User className="w-5 h-5" />
              <span>Sign in</span>
            </button>

            <button className="bg-[#1a0f0c] text-[#ffffff] hover:bg-[#151515] rounded-full px-6 py-2 flex items-center gap-2">
              Create account
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
