import { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';

interface HookResult {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProducts = (): HookResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
