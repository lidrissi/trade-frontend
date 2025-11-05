"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <Image src="/images/all-img/404-2.svg" alt="" height={300} width={300} />
      <div className="mx-auto mt-12 w-full max-w-[546px]">
        <h4 className="text-default-900 mb-4">Page not found</h4>
        <div className="mb-10 text-base font-normal dark:text-white">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="mx-auto w-full max-w-[300px]">
        <Link
          href="/analytics"
          className="btn bg-default-300 hover:bg-default-300/50 block rounded-md py-2 text-center transition-all duration-150"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  );
}
