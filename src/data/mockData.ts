
export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  categories: string[];
  featured: boolean;
  new: boolean;
  trending: boolean;
  releaseDate: string;
  iframeUrl?: string;
  controls?: {
    [key: string]: string;
  };
  developerName?: string;
  playerCount?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  orderingPriority: number;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Action",
    slug: "action",
    orderingPriority: 1
  },
  {
    id: "cat-2",
    name: "Adventure",
    slug: "adventure",
    orderingPriority: 2
  },
  {
    id: "cat-3",
    name: "Puzzle",
    slug: "puzzle",
    orderingPriority: 3
  },
  {
    id: "cat-4",
    name: "Racing",
    slug: "racing",
    orderingPriority: 4
  },
  {
    id: "cat-5",
    name: "Strategy",
    slug: "strategy",
    orderingPriority: 5
  },
  {
    id: "cat-6",
    name: "Sports",
    slug: "sports",
    orderingPriority: 6
  }
];

export const games: Game[] = [
  {
    id: "game-1",
    slug: "space-blaster",
    title: "Space Blaster",
    description: "Blast through space in this fast-paced arcade shooter. Destroy enemy ships, collect power-ups, and save the galaxy from an alien invasion. Features multiple levels, boss battles, and high score tracking.",
    thumbnail: "https://images.unsplash.com/photo-1614469723922-c043ad9fd036?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["action", "adventure"],
    featured: true,
    new: false,
    trending: true,
    releaseDate: "2024-04-15"
  },
  {
    id: "game-2",
    slug: "puzzle-master",
    title: "Puzzle Master",
    description: "Test your brain with over 100 challenging puzzles. Solve intricate patterns, unravel mysteries, and compete against time. Perfect for puzzle enthusiasts of all ages with increasing difficulty levels.",
    thumbnail: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["puzzle"],
    featured: false,
    new: true,
    trending: false,
    releaseDate: "2025-05-01"
  },
  {
    id: "game-3",
    slug: "turbo-racer",
    title: "Turbo Racer",
    description: "Feel the adrenaline in this high-speed racing game. Choose from 20 customizable vehicles, race across 15 unique tracks, and compete against AI or friends in multiplayer mode.",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["racing", "sports"],
    featured: true,
    new: false,
    trending: true,
    releaseDate: "2024-03-10"
  },
  {
    id: "game-4",
    slug: "battle-tactics",
    title: "Battle Tactics",
    description: "Command your forces in this turn-based strategy game. Build your army, research technologies, and outmaneuver your opponents using superior tactics and strategy.",
    thumbnail: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["strategy"],
    featured: false,
    new: true,
    trending: false,
    releaseDate: "2025-04-28"
  },
  {
    id: "game-5",
    slug: "zombie-survival",
    title: "Zombie Survival",
    description: "Survive the zombie apocalypse in this intense action-adventure. Scavenge for supplies, craft weapons, and defend yourself against hordes of the undead in an open world.",
    thumbnail: "https://images.unsplash.com/photo-1616567214738-22964a7ad6a5?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["action", "adventure"],
    featured: true,
    new: false,
    trending: true,
    releaseDate: "2024-02-14"
  },
  {
    id: "game-6",
    slug: "candy-crush-clone",
    title: "Sweet Match",
    description: "Match colorful candies in this addictive puzzle game. Complete challenging levels, unlock power-ups, and compete with friends for the highest score.",
    thumbnail: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["puzzle"],
    featured: false,
    new: false,
    trending: true,
    releaseDate: "2023-12-01"
  },
  {
    id: "game-7",
    slug: "football-champions",
    title: "Football Champions",
    description: "Lead your team to victory in this realistic football simulation. Train players, manage tactics, and compete in leagues and tournaments around the world.",
    thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["sports", "strategy"],
    featured: true,
    new: false,
    trending: false,
    releaseDate: "2024-01-05"
  },
  {
    id: "game-8",
    slug: "medieval-kingdoms",
    title: "Medieval Kingdoms",
    description: "Build and expand your medieval kingdom in this epic strategy game. Form alliances, wage wars, and lead your civilization from the Dark Ages to the Renaissance.",
    thumbnail: "https://images.unsplash.com/photo-1546531130-0157c4eea91a?q=80&w=400&h=300&auto=format&fit=crop",
    categories: ["strategy", "adventure"],
    featured: false,
    new: true,
    trending: true,
    releaseDate: "2025-04-30"
  }
];
