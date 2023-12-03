import { createContext } from 'react';
import { DEFAULT_CATEGORY } from '../../utils/constants';

export interface ProductFilterContextProps {
  category: string;
  setCategory: (category: string) => void;
}

export const ProductFilterContext = createContext<ProductFilterContextProps>({
  category: DEFAULT_CATEGORY,
  setCategory: () => {},
});
