import React from 'react';
import { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [wholePart, fractionalPart] = product.price.toFixed(2).split('.');

  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 w-full">
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <img
          src={product.image}
          alt={product.title}
          className="absolute top-0 left-0 w-full h-full object-contain bg-white"
        />
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-medium text-sm sm:text-md mb-1 text-gray-900 dark:text-white truncate">
          {product.title}
        </div>
        <div className="mb-1 text-gray-900 dark:text-white font-bold">
          <span className="text-sm sm:text-md">czk</span>
          <span className="text-md sm:text-lg">{wholePart}.</span>
          <span className="text-sm sm:text-md">{fractionalPart}</span>
        </div>
        <div className="font-medium text-gray-500 dark:text-gray-300 text-sm sm:text-md">
          {product.rating.count} sold
          <span style={{ color: '#ff6d6d' }}> &#9733;</span>{' '}
          {product.rating.rate}
        </div>
      </div>
    </div>
  );
};
