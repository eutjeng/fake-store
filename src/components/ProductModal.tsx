import React from 'react';
import { Dialog } from '@headlessui/react';
import { Product } from '../interfaces/Product';
import { ProductItem } from './ProductItem';
import { CloseButton } from './CloseButton';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  closeModal: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  closeModal,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed z-30 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen z-40">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="z-10 bg-white dark:bg-gray-900 rounded max-w-sm mx-auto p-6 space-y-4">
          <div className="flex justify-end">
            <CloseButton onClick={closeModal} />
          </div>

          <Dialog.Title
            as="h3"
            className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
            autoFocus
          >
            {product.title}
          </Dialog.Title>

          <ProductItem product={product} isDialog />
        </div>
      </div>
    </Dialog>
  );
};
