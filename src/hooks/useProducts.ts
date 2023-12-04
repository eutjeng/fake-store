import { useContext } from 'react';

import { API_URL, DEFAULT_CATEGORY } from '../utils/constants';
import { ProductFilterContext } from '../context/filter/ProductFilterContext';
import { useFetch } from './useFetch';
import { Product } from '../interfaces/Product';

const getApiUrl = (category?: string) => {
  if (!category || category === DEFAULT_CATEGORY) {
    return `${API_URL}/products/`;
  }

  return `${API_URL}/products/category/${category}`;
};

export const useProducts = () => {
  const { category } = useContext(ProductFilterContext);
  const {
    data: products,
    loading,
    error,
  } = useFetch<Product[]>(getApiUrl(category));

  return { products, loading, error };
};
