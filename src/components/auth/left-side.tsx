export default function LeftSide() {
  return (
    <div className="relative z-1 hidden flex-1 overflow-hidden bg-[#839DFC] leading-[48px] text-white lg:block">
      <div className="flex h-full max-w-[520px] flex-col items-center justify-center">
        {/* <Link href="/" className="mb-6 inline-block">
          <Logo />
        </Link> */}
        <h4 className="w-1/2 text-7xl">Your Gateway to Moroccan Trade.</h4>
      </div>
      <div className="absolute bottom-[-130px] left-0 z-[-1] h-full w-full 2xl:bottom-[-160px]">
        {/* <Image
          src="/images/auth/ils1.svg"
          alt=""
          priority
          width={300}
          height={300}
          className="mb-10 h-full w-full"
        /> */}
      </div>
    </div>
  );
}
