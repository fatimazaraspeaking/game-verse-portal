
import { Game } from '@/data/mockData';
import GameCard from './GameCard';

interface GameGridProps {
  games: Game[];
  title: string;
}

const GameGrid: React.FC<GameGridProps> = ({ games, title }) => {
  return (
    <section className="py-6">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
