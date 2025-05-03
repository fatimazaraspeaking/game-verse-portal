
import { Link } from 'react-router-dom';
import { Game } from '@/data/mockData';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Link to={`/game/${game.slug}`} className="game-card block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
        <img 
          src={game.thumbnail} 
          alt={game.title}
          className="w-full h-full object-cover" 
          loading="lazy"
        />
        <div className="game-card-overlay"></div>
        <div className="absolute bottom-0 left-0 p-3 w-full">
          <h3 className="text-base font-bold text-white line-clamp-1">
            {game.title}
          </h3>
          <div className="flex gap-2 mt-1">
            {game.categories.slice(0, 2).map((category, idx) => (
              <span 
                key={idx}
                className="category-badge bg-black/50 backdrop-blur-sm text-white"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        {game.new && (
          <div className="absolute top-2 right-2">
            <span className="bg-accent px-2 py-0.5 rounded text-xs font-semibold">NEW</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default GameCard;
