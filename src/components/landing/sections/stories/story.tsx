import { Button } from '@/components/ui/button';
import { BadgeCheck, Check } from 'lucide-react';

export default function Story({ description, image, name, verified }: any) {
  return (
    <div className="bg-white hover:text-white hover:bg-brand-light rounded-3xl shadow-xl p-4 w-full relative font-outfit">
      <div className="flex items-center gap-8 ">
        <div
          className={`bg-white w-32 h-32  flex items-center justify-center rounded-3xl bg-contain bg-no-repeat bg-center`}
          style={{
            backgroundImage: `url('/images/home/stories/${image}')`,
          }}
        />
        <div className="flex-1 pt-4 ">
          <h2 className="text-xl font-bold ">{name}</h2>
          <p className="text-sm text-[#666666]leading-relaxed mb-6">{description}</p>
          <Button variant="link" className="underline p-0 font-semibold text-black">
            Visit retail shop
          </Button>
          <a href="#" className="text-xl  font-semibold underline hover:no-underline transition-all"></a>
        </div>
        <BadgeCheck
          className="w-10 h-10 text-white absolute top-4 right-4 z-10"
          fill={verified ? '#29D8A0' : '#656C69'}
        />
      </div>
    </div>
  );
}
