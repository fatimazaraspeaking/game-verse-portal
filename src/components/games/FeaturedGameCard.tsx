
import { Link } from 'react-router-dom';
import { Game } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface FeaturedGameCardProps {
  game: Game;
}

const FeaturedGameCard: React.FC<FeaturedGameCardProps> = ({ game }) => {
  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
      <img 
        src={game.thumbnail} 
        alt={game.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full">
        <div className="flex flex-wrap gap-2 mb-2">
          {game.categories.map((category, idx) => (
            <Link 
              key={idx} 
              to={`/category/${category}`}
              className="category-badge bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
            >
              {category}
            </Link>
          ))}
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{game.title}</h2>
        <p className="text-sm md:text-base text-gray-200 mb-4 line-clamp-2 md:w-3/4">{game.description}</p>
        <div className="flex gap-3">
          <Button asChild>
            <Link to={`/game/${game.slug}`} className="flex items-center gap-2">
              <Play size={16} />
              Play Now
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={`/game/${game.slug}`}>
              More Info
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGameCard;
