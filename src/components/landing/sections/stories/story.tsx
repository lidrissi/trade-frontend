import { Button } from '@/components/ui/button';
import { BadgeCheck, Check } from 'lucide-react';

export default function Story() {
  return (
    <div className="bg-[#ffffff] rounded-3xl shadow-xl p-4 w-full relative font-outfit">
      <div className="flex items-start gap-8">
        {/* Image placeholder */}
        <div className="flex-shrink-0">
          <div className="w-40 h-40 bg-[#dcdcdc] rounded-3xl" />
        </div>

        {/* Content */}
        <div className="flex-1 pt-4">
          <h2 className="text-xl font-bold text-black">Dar Nasij</h2>
          <p className="text-sm text-[#666666] leading-relaxed mb-6">
            Spécialisée dans le tissage traditionnel, notre coopérative exporte aujourd'hui vers l'Europe et l'Amérique
            du Nord grâce à trade.ma.
          </p>
          <Button variant="link" className="underline p-0 font-semibold">
            Visit retail shop
          </Button>
          <a href="#" className="text-xl text-[#000000] font-semibold underline hover:no-underline transition-all"></a>
        </div>
        <BadgeCheck className="w-10 h-10 text-white absolute top-4 right-4 z-10" fill="#656C69" />
      </div>
    </div>
  );
}
