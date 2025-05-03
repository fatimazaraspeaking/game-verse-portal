
import { useState, useEffect } from 'react';
import { Game } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Expand } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface GamePlayerProps {
  game: Game;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeUrl, setIframeUrl] = useState('');

  // Setup iframe URL from game data or JSON data
  useEffect(() => {
    // Default to the iframeUrl from the game object if it exists
    if (game.iframeUrl) {
      setIframeUrl(game.iframeUrl);
      return;
    }
    
    // Fallback to a default iframe URL
    setIframeUrl(`https://htmlpreview.github.io/?https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html`);
  }, [game]);

  const toggleFullscreen = () => {
    const gameContainer = document.getElementById('game-container');
    
    if (!gameContainer) return;
    
    if (!isFullscreen) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen()
          .then(() => setIsFullscreen(true))
          .catch(err => {
            toast({
              title: "Fullscreen Error",
              description: `Couldn't enter fullscreen mode: ${err.message}`,
              variant: "destructive"
            });
          });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
          .then(() => setIsFullscreen(false))
          .catch(err => {
            toast({
              title: "Fullscreen Error",
              description: `Couldn't exit fullscreen mode: ${err.message}`,
              variant: "destructive"
            });
          });
      }
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    toast({
      title: "Game Loaded",
      description: `${game.title} is ready to play!`
    });
  };

  return (
    <div className="w-full">
      <div id="game-container" className="game-frame-container relative bg-black aspect-video rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-game-card z-10">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4">Loading game...</p>
            </div>
          </div>
        )}
        
        <iframe 
          title={game.title}
          className="absolute inset-0 w-full h-full border-0 z-0"
          src={iframeUrl}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
          onLoad={handleIframeLoad}
        ></iframe>
        
        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="secondary"
            size="sm"
            onClick={toggleFullscreen}
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <Expand className="h-4 w-4 mr-1" />
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <h1 className="text-2xl font-bold mb-2">{game.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {game.categories.map((category, idx) => (
            <span
              key={idx}
              className="category-badge bg-game-muted text-white px-2 py-1 rounded-full text-xs"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="prose prose-invert max-w-none">
          <p>{game.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
