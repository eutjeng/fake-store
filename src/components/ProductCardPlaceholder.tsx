import React from 'react';

export const ProductCardPlaceholder: React.FC = () => {
  return (
    <div className="flex flex-col rounded overflow-hidden shadow-lg bg-white dark:bg-gray-700 w-full cubic-bezier(0.3, 1.5, 0.7, 1) duration-300">
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-medium text-sm sm:text-md mb-1 text-gray-300 dark:text-gray-500 bg-gray-300 dark:bg-gray-600 h-[1.25rem] rounded" />
        <div className="font-medium text-sm sm:text-md my-2 text-gray-300 dark:text-gray-500 bg-gray-300 dark:bg-gray-600 h-[1.25rem] rounded w-16" />
        <div className="font-medium text-sm sm:text-md mb-1 text-gray-300 dark:text-gray-500 bg-gray-300 dark:bg-gray-600 h-[1.25rem] rounded w-32" />
      </div>
    </div>
  );
};
