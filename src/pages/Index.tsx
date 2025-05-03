
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import FeaturedGames from '@/components/games/FeaturedGames';
import CategoryList from '@/components/games/CategoryList';
import GameGrid from '@/components/games/GameGrid';
import { Game } from '@/data/mockData';
import { fetchGamesFromJson, getTrendingGames, getNewGames } from '@/utils/gameUtils';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [trendingGames, setTrendingGames] = useState<Game[]>([]);
  const [newGames, setNewGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setIsLoading(true);
        
        // Try to fetch from JSON first
        const trending = await getTrendingGames();
        const latest = await getNewGames();
        
        if (trending.length > 0) {
          setTrendingGames(trending);
        }
        
        if (latest.length > 0) {
          setNewGames(latest);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load games:', error);
        toast({
          title: 'Error loading games',
          description: 'There was a problem loading the games. Please try again later.',
          variant: 'destructive',
        });
        setIsLoading(false);
      }
    };

    loadGames();
  }, []);

  return (
    <Layout>
      <div className="pb-12">
        {/* Hero Carousel */}
        <FeaturedGames />
        
        {/* Category Navigation */}
        <CategoryList />
        
        {isLoading ? (
          <div className="container px-4 md:px-6 py-16 text-center">
            <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
            <p className="mt-4">Loading games...</p>
          </div>
        ) : (
          <>
            {/* Trending Games */}
            {trendingGames.length > 0 && (
              <GameGrid games={trendingGames} title="Trending Now" />
            )}
            
            {/* New Releases */}
            {newGames.length > 0 && (
              <GameGrid games={newGames} title="New Releases" />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
