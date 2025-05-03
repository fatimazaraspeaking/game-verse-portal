
import { useParams } from 'react-router-dom';
import { games, categories } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import GameCard from '@/components/games/GameCard';
import { NotFound } from './NotFound';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(cat => cat.slug === slug);
  
  const filteredGames = games.filter(game => 
    game.categories.includes(slug || '')
  );

  if (!category) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-3xl font-bold">{category.name} Games</h1>
          <p className="text-muted-foreground">
            Browse our collection of {filteredGames.length} {category.name.toLowerCase()} games
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
              There are currently no games in the {category.name} category.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
