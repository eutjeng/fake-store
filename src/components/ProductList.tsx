import React, { PropsWithChildren } from 'react';
import { ProductCard } from './ProductCard';

import { ProductCardPlaceholder } from './ProductCardPlaceholder';
import { useProducts } from '../hooks/useProducts';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12">
        {children}
      </div>
    </div>
  );
};

export const ProductList: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return (
      <Container>
        {Array.from(new Array(20))
          .fill(0)
          .map((_, index) => (
            <ProductCardPlaceholder key={index} />
          ))}
      </Container>
    );
  }

  return (
    <Container>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};
