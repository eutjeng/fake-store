import { useState, useEffect, useContext, useCallback } from 'react';
import { Product } from '../interfaces/Product';

import { API_URL, DEFAULT_CATEGORY } from '../utils/constants';
import { ProductFilterContext } from '../context/filter/ProductFilterContext';

interface HookResult {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const getApiUrl = (category?: string) => {
  if (!category || category === DEFAULT_CATEGORY) {
    return `${API_URL}/products/`;
  }

  return `${API_URL}/products/category/${category}`;
};

export const useProducts = (): HookResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { category } = useContext(ProductFilterContext);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(getApiUrl(category));
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error };
};
