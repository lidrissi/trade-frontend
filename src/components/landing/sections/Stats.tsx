import Image from 'next/image';

export default function Stats() {
  const stats = [
    {
      value: '+10 k',
      label: 'Products Exported',
    },
    {
      value: '+500',
      label: 'Verified Suppliers',
    },
    {
      value: '+1k',
      label: 'Projects complete',
    },
    {
      value: '+2k',
      label: 'Happy clients',
    },
  ];

  return (
    <div className="font-quicksand bg-[#1E1B68] mb-14 rounded-b-5xl">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-between p-6 sm:px-6 sm:py-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <Image
              className="h-auto w-auto"
              alt=""
              width={110}
              height={110}
              src={`/images/home/stats/stats${index + 1}.png`}
            />
            <div className="flex flex-col">
              <h3 className="text-[#ffffff] text-xl  sm:text-5xl font-bold leading-none">{stat.value}</h3>
              <p className="text-[#ffffff] text-xs font-bold leading-relaxed">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
