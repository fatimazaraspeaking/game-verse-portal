
import { useState, useEffect } from 'react';
import { games } from '@/data/mockData';
import FeaturedGameCard from './FeaturedGameCard';

const FeaturedGames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredGames = games.filter(game => game.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  return (
    <section className="pt-4 pb-6">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl">
          {featuredGames.length > 0 && (
            <FeaturedGameCard game={featuredGames[currentIndex]} />
          )}
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {featuredGames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
