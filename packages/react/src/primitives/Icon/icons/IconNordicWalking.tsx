import React from 'react';
export const IconNordicWalking = (props) => {
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
      <path d="M9.25,3.75C9.25,2.78,10.03,2,11,2s1.75,0.78,1.75,1.75c0,0.97-0.79,1.75-1.75,1.75C10.04,5.5,9.25,4.72,9.25,3.75z M15,11 V9.5c-3.12,0-2.99-2.17-4.11-3.06c-0.57-0.46-1.35-0.57-2.03-0.28L5,7.79V11h1.5V8.78l1.65-0.7L6.2,18h1.53l1.19-6.02l1.58,1.59V18 H12v-5.05l-1.46-1.46l0.49-2.48C11.94,10.21,13.37,11,15,11z M14,18h1v-6h-1V18z M6.03,12H5l-1.4,6h1.03L6.03,12z" />
    </svg>
  );
};
