import React from 'react';
export const IconSavings = (props) => {
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
      <path d="M16.5,6.5l-2-2C14.5,4.14,15,3.52,15,3c0-0.55-0.45-1-1-1c-2.17,0-3.35,1.5-3.35,1.5H6.5C4.05,3.5,2,5.47,2,8 c0,2.33,2,9,2,9h4.5v-1.5H10V17h4.5l1.25-4.5L18,12V6.5H16.5z M11,7.5H7V6h4V7.5z M13.25,9c-0.41,0-0.75-0.34-0.75-0.75 c0-0.41,0.34-0.75,0.75-0.75S14,7.84,14,8.25C14,8.66,13.66,9,13.25,9z" />
    </svg>
  );
};
