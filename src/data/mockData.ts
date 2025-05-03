
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
