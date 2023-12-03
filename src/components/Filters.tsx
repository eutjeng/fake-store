import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FilterIcon } from '../icons/FilterIcon';
import { CloseButton } from './CloseButton';

export const Filters: React.FC = () => {
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setFiltersOpen(true)}
        className="flex px-1 items-center md:hover:underline rounded-lg dark:text-white"
      >
        <div className="mr-2">
          <FilterIcon />
        </div>
        Filters
      </button>

      <Transition
        show={isFiltersOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-white dark:bg-gray-900 p-4 z-20 md:fixed md:right-0 md:left-auto md:top-10 md:max-w-md md:rounded-lg md:shadow-lg"
      >
        <div className="flex flex-col space-y-4 h-full">
          <CloseButton onClick={() => setFiltersOpen(false)} />

          <div className="flex-grow flex flex-col gap-2">
            <input
              type="text"
              placeholder="Product Name"
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="number"
              placeholder="Max Price"
              className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-300"
            />
            <select className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:border-blue-300">
              <option>Average Rating</option>
              {/* Options */}
            </select>
          </div>

          <button className="p-3 bg-blue-500 text-white rounded-lg mt-4">
            Apply Filters
          </button>
        </div>
      </Transition>
    </>
  );
};
