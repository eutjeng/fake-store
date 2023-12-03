import React from 'react';
import { Product } from '../interfaces/Product';

interface ProductCardProps {
  product: Product;
  isDialog?: boolean;
}

export const ProductItem: React.FC<ProductCardProps> = ({
  product,
  isDialog,
}) => {
  const [wholePart, fractionalPart] = product.price.toFixed(2).split('.');

  return (
    <>
      <div
        className={`z-10 flex flex-col rounded overflow-hidden w-full cubic-bezier(0.3, 1.5, 0.7, 1) duration-300 ${
          isDialog ? '' : 'shadow-lg bg-white dark:bg-gray-700'
        }`}
      >
        <div className="relative w-full" style={{ paddingBottom: '100%' }}>
          <img
            src={product.image}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full object-contain bg-white"
          />
        </div>
        <div className={`py-4 flex-grow ${isDialog ? '' : 'px-6'}`}>
          <div
            className={`text-sm sm:text-md mb-1 text-gray-900 dark:text-white ${
              isDialog ? '' : 'truncate'
            }`}
          >
            {isDialog ? product.description : product.title}
          </div>

          <div className="mb-1 text-gray-900 dark:text-white font-medium">
            <span className="text-sm sm:text-md">CZK</span>
            <span className="text-md sm:text-lg">{wholePart}.</span>
            <span className="text-sm sm:text-md">{fractionalPart}</span>
          </div>
          <div className="text-gray-500 dark:text-gray-300 text-sm sm:text-md">
            {product.rating.count} sold
            <span style={{ color: '#ff6d6d' }}> &#9733;</span>{' '}
            {product.rating.rate}
          </div>
        </div>
      </div>
    </>
  );
};
