import React from 'react';
export const IconOtherHouses = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" />
      <path d="M10,3.5L1.75,9.8l0.91,1.19L4,9.97V17h12V9.97l1.34,1.02l0.91-1.19L10,3.5z M7,12.5c-0.41,0-0.75-0.34-0.75-0.75 C6.25,11.34,6.59,11,7,11s0.75,0.34,0.75,0.75C7.75,12.16,7.41,12.5,7,12.5z M10,12.5c-0.41,0-0.75-0.34-0.75-0.75 C9.25,11.34,9.59,11,10,11s0.75,0.34,0.75,0.75C10.75,12.16,10.41,12.5,10,12.5z M13,12.5c-0.41,0-0.75-0.34-0.75-0.75 c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75C13.75,12.16,13.41,12.5,13,12.5z" />
    </svg>
  );
};
