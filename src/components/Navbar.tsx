
import { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        'fixed top-0 z-50 w-full py-5 transition-colors duration-300 ease-in-out',
        isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      )}
    >
      <div className="px-4 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix" 
            className="h-6 md:h-7"
          />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition">Home</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition">TV Shows</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition">Movies</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition">New & Popular</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition">My List</a>
            <a href="#" className="text-gray-300 text-sm hover:text-white transition">Browse by Languages</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <div 
              className={cn(
                "flex items-center",
                searchActive ? "border border-white bg-black px-2" : ""
              )}
            >
              <button 
                onClick={() => setSearchActive(!searchActive)}
                className="text-white p-1"
              >
                <Search size={20} />
              </button>
              <input
                type="text"
                placeholder="Titles, people, genres"
                className={cn(
                  "bg-transparent text-white outline-none",
                  searchActive ? "w-40 md:w-60 px-2 py-1" : "w-0"
                )}
                style={{ transition: "width 0.3s ease" }}
              />
            </div>
          </div>
          <a href="#" className="text-white hidden md:block">Children</a>
          <button className="text-white">
            <Bell size={20} />
          </button>
          <div className="flex items-center gap-2">
            <img 
              src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41" 
              alt="User Profile" 
              className="h-7 w-7 rounded"
            />
            <ChevronDown size={16} className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
