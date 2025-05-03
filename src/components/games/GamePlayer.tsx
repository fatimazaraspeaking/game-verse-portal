
import { useState } from 'react';
import { Game } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Expand } from 'lucide-react';

interface GamePlayerProps {
  game: Game;
}

const GamePlayer: React.FC<GamePlayerProps> = ({ game }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const gameContainer = document.getElementById('game-container');
    
    if (!gameContainer) return;
    
    if (!isFullscreen) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="w-full">
      <div id="game-container" className="game-frame-container relative">
        {/* This is a placeholder iframe - in a real implementation, this would load the actual game */}
        <iframe 
          title={game.title}
          className="absolute inset-0 w-full h-full border-0"
          src={`https://htmlpreview.github.io/?https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html`}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        ></iframe>
        
        <div className="absolute top-4 right-4 z-10">
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
              className="category-badge bg-game-muted text-white"
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
