import React, { useContext } from 'react';
import { useCategories } from '../hooks/useCategories';
import { ProductFilterContext } from '../context/filter/ProductFilterContext';

export const CategorySelect: React.FC = () => {
  const { categories } = useCategories();
  const { setCategory, category } = useContext(ProductFilterContext);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  if (!categories?.length) return null;

  return (
    <div className="relative inline-block text-gray-700 dark:text-white">
      <div className="flex items-center rounded-lg md:hover:underline">
        <span className="mr-3 capitalize">
          Category {'>'} {category}
        </span>
        <select
          id="category-select"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer capitalize"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
