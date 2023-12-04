import { API_URL } from '../utils/constants';
import { useFetch } from './useFetch';

export const useCategories = () => {
  const {
    data: categories,
    loading,
    error,
  } = useFetch<string[]>(`${API_URL}/products/categories`);

  return { categories, loading, error };
};
