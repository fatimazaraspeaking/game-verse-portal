
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import { fetchGamesFromJson } from '@/utils/gameUtils';

const CategoryList = () => {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActiveCategories = async () => {
      try {
        setLoading(true);
        const games = await fetchGamesFromJson();
        
        // Get all unique categories from games
        const uniqueCategories = new Set<string>();
        games.forEach(game => {
          game.categories.forEach(category => {
            uniqueCategories.add(category);
          });
        });
        
        setActiveCategories(Array.from(uniqueCategories));
      } catch (error) {
        console.error('Error loading active categories:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadActiveCategories();
  }, []);

  if (loading) {
    return (
      <section className="py-8">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="p-4 rounded-lg bg-game-card/50 animate-pulse h-24"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Filter categories list to only show ones that have games
  const filteredCategories = categories.filter(category => 
    activeCategories.includes(category.slug)
  );
  
  return (
    <section className="py-8">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {filteredCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group flex flex-col items-center p-4 rounded-lg bg-game-card hover:bg-game-card/80 transition-colors border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-game-accent/20 flex items-center justify-center mb-3 group-hover:bg-game-accent/30 transition-colors">
                <span className="text-lg">{category.name.charAt(0)}</span>
              </div>
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
