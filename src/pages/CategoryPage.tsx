
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import GameCard from '@/components/games/GameCard';
import { NotFound } from './NotFound';
import { Game } from '@/data/mockData';
import { fetchGamesFromJson, getGamesByCategory } from '@/utils/gameUtils';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<string | null>(null);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryGames = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        // Get all games to find categories
        const allGames = await fetchGamesFromJson();
        
        // Find if category exists by checking if any game has this category
        const categoryExists = allGames.some(game => 
          game.categories.includes(slug)
        );
        
        if (categoryExists) {
          setCategory(slug);
          const games = await getGamesByCategory(slug);
          setFilteredGames(games);
        } else {
          setCategory(null);
        }
      } catch (error) {
        console.error('Error loading category games:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryGames();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-[60vh]">
          <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>
      </Layout>
    );
  }

  if (!category) {
    return <NotFound />;
  }

  return (
    <Layout title={`${category} Games - GameVerse`} description={`Play the best ${category} games on GameVerse. Browse our collection of ${filteredGames.length} ${category.toLowerCase()} games.`}>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">{category} Games</h1>
          <p className="text-muted-foreground">
            Browse our collection of {filteredGames.length} {category.toLowerCase()} games
          </p>
        </div>
        
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium">No games found</h3>
            <p className="text-muted-foreground mt-2">
              There are currently no games in the {category} category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
