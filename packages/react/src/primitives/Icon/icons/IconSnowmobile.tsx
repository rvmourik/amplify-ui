import React from 'react';
export const IconSnowmobile = (props) => {
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
      <path d="M18.5,14.5c0,0.55-0.45,1-1,1l-2.22-2.19C16.87,12.96,18,12.17,18,11c0-0.5-6.5-6.5-6.5-6.5H9V6h1.91l1.22,1.14L9.1,9 L1.25,8.5L0,11l4.32,1.27l-3.53,1.91C-0.58,14.92-0.06,17,1.5,17h5c1.93,0,3.5-1.57,3.5-3.5h3.33l2.05,2H12.5V17h5 c1.38,0,2.5-1.12,2.5-2.5H18.5z M6.5,15.5h-5l4.87-2.63L8.5,13.5C8.5,14.6,7.6,15.5,6.5,15.5z" />
    </svg>
  );
};
