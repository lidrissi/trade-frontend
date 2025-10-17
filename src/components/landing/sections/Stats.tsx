import { ImageIcon } from 'lucide-react';

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
    <div className="container px-6 mx-auto  font-quicksand my-15">
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-between  bg-[#292929] rounded-xl sm:rounded-3xl p-6 sm:px-12 sm:py-18 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 bg-[#d9d9d9] rounded-lg sm:rounded-2xl flex items-center justify-center">
              <ImageIcon className="w-4 h-4 sm:w-8 sm:h-8 text-[#292929]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[#ffffff] text-xl  sm:text-5xl font-bold leading-none">{stat.value}</h3>
              <p className="text-[#ffffff] text-xs font-bold leading-relaxed">{stat.label}</p>
            </div>
            {index !== stats.length - 1 && <div className="hidden lg:blockh-full w-0.25 bg-white" />}
          </div>
        ))}
      </div>
    </div>
  );
}
