
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { Movie } from '@/data/movieData';

interface ContentRowProps {
  title: string;
  movies: Movie[];
  onMovieSelect?: (movie: Movie) => void;
}

const ContentRow = ({ title, movies, onMovieSelect }: ContentRowProps) => {
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const slideLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft -= rowRef.current.clientWidth * 0.75;
    }
  };

  const slideRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollLeft += rowRef.current.clientWidth * 0.75;
    }
  };

  return (
    <div className="content-row mb-8">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-2 px-4 md:px-16">{title}</h2>
      
      <div className="group relative">
        {showLeftArrow && (
          <button 
            onClick={slideLeft}
            className="absolute left-1 top-0 bottom-0 z-10 flex items-center justify-center h-full w-12 bg-black/30 hover:bg-black/50"
          >
            <ChevronLeft size={30} className="text-white" />
          </button>
        )}
        
        <div 
          ref={rowRef}
          className="flex overflow-x-scroll scrollbar-none scroll-smooth py-2" 
          onScroll={handleScroll}
        >
          {movies.map((movie, index) => (
            <MovieCard 
              key={movie.id} 
              title={movie.title} 
              imageSrc={movie.imageSrc}
              index={index}
              onClick={() => onMovieSelect && onMovieSelect(movie)}
            />
          ))}
        </div>
        
        {showRightArrow && (
          <button 
            onClick={slideRight}
            className="absolute right-1 top-0 bottom-0 z-10 flex items-center justify-center h-full w-12 bg-black/30 hover:bg-black/50"
          >
            <ChevronRight size={30} className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
