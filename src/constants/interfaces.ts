interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    count: number;
    rating: Rating;
  }
  
interface Rating {
    rate: number;
    count: number;
}

export type { Product, Rating };