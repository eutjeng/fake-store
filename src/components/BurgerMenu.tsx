import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const menuItems = [
  { name: 'Profile', emoji: '👤' },
  { name: 'Cart', emoji: '🛒' },
  { name: 'Orders', emoji: '📦' },
  { name: 'Favorites', emoji: '❤️' },
  { name: 'Messages', emoji: '💬' },
  { name: 'Settings', emoji: '⚙️' },
  { name: 'Help', emoji: '❓' },
  { name: 'Logout', emoji: '🚪' },
];

export const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="ml-4" onClick={() => setIsOpen(true)}>
        <div className="w-10 h-8 flex flex-col justify-between">
          <div className="w-full h-1 bg-black dark:bg-white rounded-full"></div>
          <div className="w-full h-1 bg-black dark:bg-white rounded-full mt-1"></div>
          <div className="w-full h-1 bg-black dark:bg-white rounded-full mt-1"></div>
        </div>
      </button>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-50"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={() => setIsOpen(false)}
      />

      <Transition
        show={isOpen}
        enter="transition-transform duration-100"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-100"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="fixed inset-y-0 right-0 w-48 max-w-sm p-4 bg-white shadow-lg z-20  dark:bg-gray-900"
      >
        <ul className="flex flex-col divide-y divide-gray-200">
          {menuItems.map((item, index) => (
            <li key={index} className="py-2">
              <a
                onClick={() => setIsOpen(false)}
                href="#"
                className="flex items-center space-x-3 text-lg dark:text-white font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg transition-colors duration-150"
              >
                <span className="text-base mr-2">{item.emoji}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </Transition>
    </>
  );
};
