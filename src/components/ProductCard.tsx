import React, { useState } from 'react';
import { Product } from '../interfaces/Product';
import { ProductModal } from './ProductModal';
import { ProductItem } from './ProductItem';

interface ProductCardProps {
  product: Product;
  isDialog?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div onClick={() => setModalOpen(true)} className="cursor-pointer">
        <ProductItem product={product} />
      </div>
      <ProductModal
        product={product}
        isOpen={isModalOpen}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
};
