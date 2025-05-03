
import { useParams } from 'react-router-dom';
import { games } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import GamePlayer from '@/components/games/GamePlayer';
import GameGrid from '@/components/games/GameGrid';
import { NotFound } from './NotFound';

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = games.find(game => game.slug === slug);
  
  // Get similar games (games with at least one matching category)
  const similarGames = game 
    ? games
        .filter(g => 
          g.id !== game.id && 
          g.categories.some(cat => game.categories.includes(cat))
        )
        .slice(0, 5)
    : [];

  if (!game) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <GamePlayer game={game} />
          </div>
          <div className="space-y-6">
            <div className="bg-game-card rounded-lg p-4">
              <h3 className="font-bold mb-3">How to Play</h3>
              <p className="text-sm text-muted-foreground">
                Use arrow keys or WASD to move. Space to jump or shoot. 
                Press P to pause the game at any time.
              </p>
            </div>
            
            <div className="bg-game-card rounded-lg p-4">
              <h3 className="font-bold mb-3">Game Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Release Date:</span>
                  <span>{new Date(game.releaseDate).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Categories:</span>
                  <span>{game.categories.join(", ")}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-game-card rounded-lg p-4">
              <h3 className="font-bold mb-3">Share This Game</h3>
              <div className="flex gap-2">
                <button className="w-full py-2 bg-game-muted rounded hover:bg-game-muted/70 transition-colors text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {similarGames.length > 0 && (
          <div className="mt-12">
            <GameGrid games={similarGames} title="You May Also Like" />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GameDetail;
