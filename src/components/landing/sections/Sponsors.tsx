export default function Sponsors() {
  return (
    <>
      <main className="font-outfit container mx-auto my-15 bg-white px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-xl font-bold text-[#193786] sm:text-3xl">
            Partners & Sponsors
          </h1>
          <p className="text-base text-[#193786]">
            Simple steps to connect with Moroccan suppliers and grow your
            business
          </p>
        </div>
        <div className="grid grid-cols-2 items-center justify-items-center gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-6">
          {[
            "finance",
            "transition-numerique",
            "tourisme",
            "agriculture",
            "um6p",
            "ocp",
          ].map((item, index) => (
            <div key={index}>
              <img src={`/images/home/partners/${item}.png`} alt="" />
            </div>
          ))}
        </div>
      </main>
      <div className="h-16 w-full bg-[#D4DBFF]">
        <div className="rounded-b-5xl h-14 bg-white" />
      </div>
    </>
  );
}
