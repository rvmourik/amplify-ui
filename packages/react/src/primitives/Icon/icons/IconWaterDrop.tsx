import React from 'react';
export const IconWaterDrop = (props) => {
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
      <path d="M10,2c0,0-6.5,5.16-6.5,9.5c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5C16.5,7.16,10,2,10,2z M7.03,11.93 c0.24,1.66,1.79,2.77,3.4,2.54c0.3-0.04,0.57,0.19,0.57,0.49c0,0.28-0.2,0.47-0.42,0.5c-2.23,0.31-4.22-1.23-4.54-3.39 C6,11.77,6.23,11.5,6.54,11.5C6.79,11.5,7,11.68,7.03,11.93z" />
    </svg>
  );
};
