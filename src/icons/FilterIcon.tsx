import React from 'react';

export const FilterIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      viewBox="0 0 36 36"
      className="h-4 w-4"
    >
      <path
        d="M33 4H3a1 1 0 00-1 1v1.67a1.79 1.79 0 00.53 1.27L14 19.58v10.2l2 .76V19a1 1 0 00-.29-.71L4 6.59V6h28v.61L20.33 18.29A1 1 0 0020 19v13.21l2 .79V19.5L33.47 8A1.81 1.81 0 0034 6.7V5a1 1 0 00-1-1z"
        className="clr-i-outline clr-i-outline-path-1 dark:stroke-white"
      ></path>
      <path fill="none" d="M0 0H36V36H0z"></path>
    </svg>
  );
};
