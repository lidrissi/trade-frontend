import { Link } from "@/i18n/routing";
import ForgotPass from "@/components/auth/forgot-pass";
import Copyright from "@/components/auth/copyright";
import Logo from "@/components/auth/logo";
import LeftSide from "@/components/auth/left-side";

const ForgotPassPage = () => {
  return (
    <div className="flex h-dvh min-h-dvh w-full basis-full items-center overflow-hidden">
      <div className="flex h-dvh w-full flex-wrap overflow-y-auto">
        <LeftSide />
        <div className="dark:bg-default-100 relative flex-1 bg-white">
          <div className="flex h-full flex-col">
            <div className="text-default-900 mx-auto mb-3 flex h-full w-full max-w-[524px] flex-col justify-center p-7 text-2xl md:px-[42px] md:py-[44px]">
              <div className="mb-6 flex items-center justify-center text-center lg:hidden">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <div className="mb-5 text-center 2xl:mb-10">
                <h4 className="mb-4 font-medium">Forgot Your Password?</h4>
                <div className="text-default-500 text-base">
                  Reset Password with Dashcode.
                </div>
              </div>
              <div className="text-default-500 bg-default-100 mt-10 mb-4 rounded px-2 py-3 text-center text-base font-normal">
                Enter your Email and instructions will be sent to you!
              </div>

              <ForgotPass />
              <div className="text-default-500 mx-auto mt-8 text-sm font-normal uppercase md:max-w-[345px] 2xl:mt-12">
                Forget It,
                <Link
                  href="/auth/login"
                  className="text-default-900 px-2 font-medium hover:underline"
                >
                  Send me Back
                </Link>
                to The Sign In
              </div>
            </div>
            <div className="text-default-500 z-[999] pb-10 text-center text-xs font-normal">
              <Copyright />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
