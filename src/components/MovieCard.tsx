
import { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown, ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  title: string;
  imageSrc: string;
  index?: number;
  onClick?: () => void;
}

const MovieCard = ({ title, imageSrc, index = 0, onClick }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  return (
    <div 
      className={cn(
        "movie-card relative rounded overflow-hidden min-w-[200px] h-[120px] md:min-w-[240px] md:h-[140px] mx-[4px] transition-all duration-200",
        isHovered ? "z-10" : "",
        index === 0 ? "ml-4 md:ml-16" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {imageError ? (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <ImageOff className="text-gray-500" size={32} />
          <span className="text-white text-xs ml-2">{title}</span>
        </div>
      ) : (
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            setImageError(true);
            e.currentTarget.src = "https://via.placeholder.com/300x180?text=Netflix";
          }}
        />
      )}
      
      {isHovered && (
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-between">
          <div className="p-2 hidden md:block">
            <h3 className="text-white text-sm font-bold drop-shadow-lg">{title}</h3>
          </div>
          
          <div className="p-2 bg-black/70">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="bg-white rounded-full p-1 text-black">
                  <Play size={16} className="fill-black" />
                </button>
                <button className="text-white border border-gray-400 rounded-full p-1">
                  <Plus size={16} />
                </button>
                <button className="text-white border border-gray-400 rounded-full p-1">
                  <ThumbsUp size={16} />
                </button>
              </div>
              <button className="text-white border border-gray-400 rounded-full p-1">
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
