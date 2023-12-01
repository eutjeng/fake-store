import React from 'react';

import { useProducts } from './hooks/useProducts';
import { ProductList } from './components/ProductList';
import { ThemeSwitcher } from './components/ThemeSwitcher';

export const App: React.FC = () => {
  const { products, error, loading } = useProducts();

  console.log(products);

  return (
    <div className="container mx-auto p-4">
      <ThemeSwitcher />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading products</div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};
