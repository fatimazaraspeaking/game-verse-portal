
import { useState, useEffect } from 'react';
import FeaturedGameCard from './FeaturedGameCard';
import { Game } from '@/data/mockData';
import { getFeaturedGames } from '@/utils/gameUtils';

const FeaturedGames = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedGames = async () => {
      try {
        const games = await getFeaturedGames();
        setFeaturedGames(games);
      } catch (error) {
        console.error('Error loading featured games:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadFeaturedGames();
  }, []);

  useEffect(() => {
    if (featuredGames.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featuredGames.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  if (loading || featuredGames.length === 0) {
    return (
      <section className="pt-4 pb-6">
        <div className="container px-4 md:px-6">
          <div className="relative overflow-hidden rounded-xl aspect-[21/9] bg-muted/20 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-4 pb-6">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-xl">
          <FeaturedGameCard game={featuredGames[currentIndex]} />
          
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
