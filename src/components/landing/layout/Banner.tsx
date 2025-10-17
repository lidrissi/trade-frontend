import { X } from 'lucide-react';

export default function Banner() {
  return (
    <div className="hidden sm:flex relative isolate items-center gap-x-6 overflow-hidden bg-[#1D1715] px-6 py-2.5 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 sm:px-3.5 sm:before:flex-1">
      <div className="font-satoshi flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className=" text-sm/6 text-gray-100 leading-none">Sign up and get 20% off to your first order.</p>
        <a href="#" className="text-sm font-medium capitalize underline text-white">
          Sign up now
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
          <span className="sr-only">Dismiss</span>
          <X aria-hidden="true" className="size-5 text-gray-100" />
        </button>
      </div>
    </div>
  );
}
