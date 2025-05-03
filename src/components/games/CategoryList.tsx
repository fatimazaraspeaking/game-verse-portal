
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';

const CategoryList = () => {
  return (
    <section className="py-8">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category) => (
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
