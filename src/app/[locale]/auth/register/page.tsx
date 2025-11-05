import { Link } from "@/i18n/routing";
import RegForm from "@/components/auth/reg-form";
import Copyright from "@/components/auth/copyright";
import Logo from "@/components/auth/logo";
import Social from "@/components/auth/social";
import LeftSide from "@/components/auth/left-side";
const Register = () => {
  return (
    <>
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
                  <h4 className="font-medium">Sign up</h4>
                  <div className="text-default-500 text-base">
                    Create an account to start using Dashcode
                  </div>
                </div>
                <RegForm />
                <div className="border-opacity-[16%] relative border-b border-b-[#9AA2AF] pt-6">
                  <div className="bg-default-50 dark:bg-default-100 text-default-500 absolute top-1/2 left-1/2 inline-block min-w-max -translate-x-1/2 transform px-4 text-sm font-normal">
                    Or continue with
                  </div>
                </div>
                <div className="mx-auto mt-8 w-full max-w-[242px]">
                  <Social locale={""} />
                </div>
                <div className="text-default-500 mx-auto mt-6 max-w-[225px] text-sm font-normal uppercase 2xl:mt-12">
                  Already registered?
                  <Link
                    href="/auth/login"
                    className="text-default-900 font-medium hover:underline"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="text-default-500 z-999 pb-10 text-center text-xs font-normal">
                <Copyright />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
