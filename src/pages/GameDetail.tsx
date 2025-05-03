
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '@/data/mockData';
import Layout from '@/components/layout/Layout';
import GamePlayer from '@/components/games/GamePlayer';
import GameGrid from '@/components/games/GameGrid';
import { NotFound } from './NotFound';
import { getGameBySlug, fetchGamesFromJson } from '@/utils/gameUtils';
import { toast } from '@/components/ui/use-toast';

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [similarGames, setSimilarGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadGameData = async () => {
      if (!slug) return;
      
      try {
        setIsLoading(true);
        
        // Get the specific game
        const gameData = await getGameBySlug(slug);
        
        if (gameData) {
          setGame(gameData);
          
          // Get all games to find similar ones
          const allGames = await fetchGamesFromJson();
          
          // Filter for similar games (sharing categories with the current game)
          const similar = allGames
            .filter(g => 
              g.id !== gameData.id && 
              g.categories.some(cat => gameData.categories.includes(cat))
            )
            .slice(0, 5);
            
          setSimilarGames(similar);
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading game details:', error);
        toast({
          title: 'Error',
          description: 'Failed to load game details. Please try again later.',
          variant: 'destructive',
        });
        setIsLoading(false);
      }
    };
    
    loadGameData();
  }, [slug]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container px-4 md:px-6 py-16 text-center">
          <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4">Loading game details...</p>
        </div>
      </Layout>
    );
  }

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
                {game.controls ? (
                  <ul className="space-y-1">
                    {Object.entries(game.controls).map(([key, action], idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="font-medium">{key}</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  "Use arrow keys or WASD to move. Space to jump or shoot. Press P to pause the game at any time."
                )}
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
                {game.developerName && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Developer:</span>
                    <span>{game.developerName}</span>
                  </div>
                )}
                {game.playerCount && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Players:</span>
                    <span>{game.playerCount}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-game-card rounded-lg p-4">
              <h3 className="font-bold mb-3">Share This Game</h3>
              <div className="flex gap-2">
                <button 
                  className="w-full py-2 bg-game-muted rounded hover:bg-game-muted/70 transition-colors text-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast({
                      title: "Link Copied",
                      description: "Game link copied to clipboard!"
                    });
                  }}
                >
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
