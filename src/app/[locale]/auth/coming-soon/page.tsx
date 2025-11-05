import Logo from "@/components/auth/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Link } from "@/i18n/routing";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen">
      <div className="top-0 left-0 w-full xl:absolute">
        <div className="container flex flex-wrap items-center justify-between py-6">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
          <Button size="sm" variant="outline">
            Contact us
          </Button>
        </div>
      </div>
      <div className="container">
        <div className="flex min-h-screen flex-wrap items-center justify-between">
          <div className="max-w-[500px] flex-1 space-y-4">
            <div className="text-default-900 relative flex items-center space-x-3 text-2xl">
              <span className="bg-default-500 inline-block h-[1px] w-[25px]"></span>
              <span>Coming soon</span>
            </div>
            <div className="text-default-900 text-4xl font-semibold xl:text-[70px] xl:leading-[70px]">
              Get notified when we launch
            </div>
            <p className="text-default-600 max-w-[400px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="bg-default-200 dark:bg-default-800 flex items-center rounded px-3">
              <Input
                type="text"
                placeholder="Enter your email"
                className="placeholder:text-secondary-500 block h-full w-full flex-1 border-none bg-transparent py-6 text-base focus:border-0 focus:ring-0 focus:outline-hidden"
              />
              <div className="flex-none">
                <Button type="button" className="px-6">
                  Notify me
                </Button>
              </div>
            </div>
            <div className="text-default-500 text-sm">
              *Don’t worry we will not spam you :
            </div>
          </div>
          <div>
            <Image
              width={300}
              height={300}
              src="/images/svg/img-1.svg"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="bottom-0 w-full xl:fixed">
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
              <ul className="flex justify-center gap-3 md:justify-start">
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

export default ComingSoonPage;
