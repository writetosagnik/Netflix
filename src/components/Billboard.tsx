
import { Play, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Billboard = () => {
  return (
    <div className="relative h-[56.25vw] md:h-[80vh] lg:h-[75vh]">
      {/* Background image */}
      <div 
        className="w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcJ8_aFZbjvmgVGfv54Kog9Y-bnVYC7sBvaW3tJldk-dSE8H1vJSDV_6PVxyvuazSTLPGPz7v4JCzCmPUROCvgVrZxIX.jpg?r=8be')" 
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/90 via-netflix-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-[30%] md:bottom-[35%] left-4 md:left-16 max-w-xs md:max-w-lg lg:max-w-2xl">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
            Stranger Things
          </h1>
          <p className="text-white text-sm md:text-base drop-shadow-md">
            When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
          </p>
          <div className="flex gap-3 mt-2">
            <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90">
              <Play size={20} className="fill-black" />
              Play
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Info size={20} />
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
