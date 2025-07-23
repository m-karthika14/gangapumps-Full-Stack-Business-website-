export interface Product {
  _id: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  reviews: {
    name: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}

export const products: Product[] = [];
