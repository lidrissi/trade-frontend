export default function Sponsors() {
  return (
    <main className=" bg-white px-4 font-outfit">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-[#3a3a3a] text-3xl font-bold mb-4">Partners & Sponsors</h1>
          <p className="text-black text-base">Simple steps to connect with Moroccan suppliers and grow your business</p>
        </div>

        {/* Logo Grid */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="flex gap-6 items-center justify-center flex-wrap">
            <div className="w-[200px] h-[80px] bg-[#d9d9d9] rounded-[32px]" />
            <div className="w-[140px] h-[80px] bg-[#d3d3d3] rounded-[32px]" />
            <div className="w-[340px] h-[80px] bg-[#dadada] rounded-[32px]" />
            <div className="w-[160px] h-[80px] bg-[#d9d9d9] rounded-[32px]" />
            <div className="w-[160px] h-[80px] bg-[#d3d3d3] rounded-[32px]" />
            <div className="w-[140px] h-[80px] bg-[#dadada] rounded-[32px]" />
            <div className="w-[140px] h-[80px] bg-[#d3d3d3] rounded-[32px]" />
            <div className="w-[160px] h-[80px] bg-[#d3d3d3] rounded-[32px]" />
            <div className="w-[140px] h-[80px] bg-[#dadada] rounded-[32px]" />
            <div className="w-[340px] h-[80px] bg-[#dadada] rounded-[32px]" />
          </div>
        </div>
      </div>
    </main>
  );
}
