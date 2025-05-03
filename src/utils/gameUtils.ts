
import { Game } from '@/data/mockData';

/**
 * Fetches games data from the JSON file
 */
export const fetchGamesFromJson = async (): Promise<Game[]> => {
  try {
    const response = await fetch('/data/games.json');
    if (!response.ok) {
      throw new Error('Failed to fetch games data');
    }
    const data = await response.json();
    return data.games;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

/**
 * Get a game by its slug
 */
export const getGameBySlug = async (slug: string): Promise<Game | undefined> => {
  const games = await fetchGamesFromJson();
  return games.find(game => game.slug === slug);
};

/**
 * Get games by category
 */
export const getGamesByCategory = async (category: string): Promise<Game[]> => {
  const games = await fetchGamesFromJson();
  return games.filter(game => game.categories.includes(category));
};

/**
 * Get featured games
 */
export const getFeaturedGames = async (): Promise<Game[]> => {
  const games = await fetchGamesFromJson();
  return games.filter(game => game.featured);
};

/**
 * Get trending games
 */
export const getTrendingGames = async (): Promise<Game[]> => {
  const games = await fetchGamesFromJson();
  return games.filter(game => game.trending);
};

/**
 * Get new games
 */
export const getNewGames = async (): Promise<Game[]> => {
  const games = await fetchGamesFromJson();
  return games.filter(game => game.new);
};

/**
 * Get all categories that have games
 */
export const getActiveCategories = async (): Promise<string[]> => {
  const games = await fetchGamesFromJson();
  const categories = new Set<string>();
  
  games.forEach(game => {
    game.categories.forEach(category => {
      categories.add(category);
    });
  });
  
  return Array.from(categories);
};
