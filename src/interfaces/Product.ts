export interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
}
