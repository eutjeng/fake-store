import React, { useState, PropsWithChildren, useCallback } from 'react';
import { ProductFilterContext } from './ProductFilterContext';
import { DEFAULT_CATEGORY } from '../../utils/constants';

export const ProductFilterContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [category, setCategory] = useState(DEFAULT_CATEGORY);

  const handleChangeCategory = useCallback((category: string) => {
    setCategory(category);
  }, []);

  return (
    <ProductFilterContext.Provider
      value={{ category, setCategory: handleChangeCategory }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};
