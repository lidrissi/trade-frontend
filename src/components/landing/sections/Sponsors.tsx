export default function Sponsors() {
  return (
    <main className="container bg-white px-6 my-15 font-outfit mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-[#193786] text-xl sm:text-3xl font-bold mb-4">Partners & Sponsors</h1>
        <p className="text-[#193786] text-base">
          Simple steps to connect with Moroccan suppliers and grow your business
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
        {['finance', 'transition-numerique', 'tourisme', 'agriculture', 'um6p', 'ocp'].map((item, index) => (
          <div key={index}>
            <img src={`/images/home/partners/${item}.png`} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
