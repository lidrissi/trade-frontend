import Logo from "@/components/auth/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 w-full">
        <div className="container flex flex-wrap items-center justify-between py-6">
          <div>
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div>
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex min-h-screen flex-col flex-wrap items-center justify-center text-center">
          <Image height={500} width={500} src="/images/svg/img-2.svg" alt="" />
          <h4 className="text-default-900 mb-2 text-3xl font-medium">
            We are under maintenance.
          </h4>
          <p className="text-default-500 text-base font-normal">
            We’re making the system more awesome. <br />
            We’ll be back shortly.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <div className="container">
          <div className="flex-wrap items-center justify-between space-y-4 py-6 md:flex">
            <div>
              <ul className="flex justify-center gap-3 md:justify-start">
                <li>
                  <Link
                    href="#"
                    className="border-default hover:bg-default hover:text-default-50 inline-block rounded-full border border-solid p-2 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:facebook" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default hover:bg-default hover:text-default-50 inline-block rounded-full border border-solid p-2 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default hover:bg-default hover:text-default-50 inline-block rounded-full border border-solid p-2 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:linkedin2" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="border-default hover:bg-default hover:text-default-50 inline-block rounded-full border border-solid p-2 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" icon="icomoon-free:google" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex justify-center space-x-3 md:justify-start">
                <li>
                  <a
                    href="#"
                    className="text-default-500 hover:text-default-900 text-sm transition duration-150"
                  >
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500 hover:text-default-900 text-sm transition duration-150"
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-default-500 hover:text-default-900 text-sm transition duration-150"
                  >
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;
