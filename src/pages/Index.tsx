
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import ContentRow from '@/components/ContentRow';
import Footer from '@/components/Footer';
import { categories, type Movie } from '@/data/movieData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Plus, ThumbsUp, ImageOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [modalImageError, setModalImageError] = useState(false);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalImageError(false);
    setShowModal(true);
  };

  return (
    <main className="relative min-h-screen bg-netflix-black overflow-x-hidden">
      <Navbar />
      <Billboard />
      
      <div className="mt-5 pb-10">
        {categories.map((category) => (
          <ContentRow 
            key={category.id} 
            title={category.title} 
            movies={category.movies}
            onMovieSelect={handleMovieSelect}
          />
        ))}
      </div>
      
      <Footer />

      <Dialog open={showModal} onOpenChange={(open) => {
        setShowModal(open);
        if (!open) {
          setTimeout(() => setModalImageError(false), 300);
        }
      }}>
        <DialogContent className="sm:max-w-[725px] bg-netflix-dark p-0 rounded-md overflow-hidden border-none">
          {selectedMovie && (
            <>
              <div className="relative h-[300px] w-full">
                {modalImageError ? (
                  <div className="w-full h-full bg-gray-800 flex flex-col items-center justify-center">
                    <ImageOff size={48} className="text-gray-500 mb-2" />
                    <span className="text-white">{selectedMovie.title}</span>
                  </div>
                ) : (
                  <img 
                    src={selectedMovie.imageSrc} 
                    alt={selectedMovie.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      setModalImageError(true);
                      e.currentTarget.src = "https://via.placeholder.com/725x300?text=Netflix";
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-3">
                  <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90">
                    <Play size={20} className="fill-black" />
                    Play
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Plus size={20} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <ThumbsUp size={20} />
                  </Button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <p className="text-green-500 font-bold">97% Match</p>
                  {selectedMovie.year && <span>{selectedMovie.year}</span>}
                  {selectedMovie.ageRating && (
                    <span className="border px-2 py-0.5 text-xs">{selectedMovie.ageRating}</span>
                  )}
                  {selectedMovie.duration && <span>{selectedMovie.duration}</span>}
                  <span className="border border-white/40 rounded px-1 text-xs">HD</span>
                </div>
                
                <p className="text-white">{selectedMovie.description}</p>
                
                <div>
                  <p className="text-gray-400">
                    <span className="text-white">Genres:</span> {selectedMovie.genre?.join(', ')}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Index;
