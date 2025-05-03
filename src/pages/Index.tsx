
import Layout from '@/components/layout/Layout';
import FeaturedGames from '@/components/games/FeaturedGames';
import CategoryList from '@/components/games/CategoryList';
import GameGrid from '@/components/games/GameGrid';
import { games } from '@/data/mockData';

const Index = () => {
  const trendingGames = games.filter(game => game.trending);
  const newGames = games.filter(game => game.new);

  return (
    <Layout>
      <div className="pb-12">
        {/* Hero Carousel */}
        <FeaturedGames />
        
        {/* Category Navigation */}
        <CategoryList />
        
        {/* Trending Games */}
        <GameGrid games={trendingGames} title="Trending Now" />
        
        {/* New Releases */}
        <GameGrid games={newGames} title="New Releases" />
      </div>
    </Layout>
  );
};

export default Index;
