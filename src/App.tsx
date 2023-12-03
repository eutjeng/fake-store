import React from 'react';

import { ProductList } from './components/ProductList';
import { Header } from './components/Header';

import { ProductFilterContextProvider } from './context/filter/ProductFilterContextProvider';

export const App: React.FC = () => {
  return (
    <ProductFilterContextProvider>
      <div className="min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 cubic-bezier(0.3, 1.5, 0.7, 1) duration-300">
        <Header />
        <ProductList />
      </div>
    </ProductFilterContextProvider>
  );
};
