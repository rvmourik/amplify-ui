import React from 'react';
export const IconTransgender = (props) => {
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
      <path d="M13.5,1.5V3h1.94l-3.16,3.16C11.62,5.74,10.84,5.5,10,5.5S8.38,5.74,7.72,6.16l-0.6-0.6L8.18,4.5L7.12,3.44L6.06,4.5L4.56,3 H6.5V1.5H2V6h1.5V4.06L5,5.56L3.94,6.62L5,7.68l1.06-1.06l0.56,0.56c-0.55,0.71-0.87,1.6-0.87,2.57c0,2.09,1.51,3.83,3.5,4.18v1.57 h-1.5V17h1.5v1.5h1.5V17h1.5v-1.5h-1.5v-1.57c1.99-0.35,3.5-2.09,3.5-4.18c0-0.97-0.32-1.86-0.87-2.57l3.12-3.12V6H18V1.5H13.5z M10,12.5c-1.52,0-2.75-1.23-2.75-2.75S8.48,7,10,7s2.75,1.23,2.75,2.75S11.52,12.5,10,12.5z" />
    </svg>
  );
};
