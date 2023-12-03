import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { CategorySelect } from './CategorySelect';
import { BurgerMenu } from './BurgerMenu';
import { Filters } from './Filters';

export const Header: React.FC = () => {
  return (
    <div className="py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12 bg-white dark:bg-gray-600 cubic-bezier(0.3, 1.5, 0.7, 1) duration-300">
      <div className="mx-auto flex justify-between items-center flex-col">
        <div className="flex items-center w-full mb-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-white dark:text-white dark:bg-gray-800 border-4 border-black p-2 focus:outline-none focus:ring focus:border-blue-300 w-full"
          />
          <BurgerMenu />
        </div>

        <div className="flex items-center w-full">
          <div className="w-full">
            <CategorySelect />
          </div>
          <ThemeSwitcher />
          <Filters />
        </div>
      </div>
    </div>
  );
};
