import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="self-end p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-800 focus:outline-none"
    >
      <CloseIcon />
    </button>
  );
};
