import React from 'react';
export const IconEditCalendar = (props) => {
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
      <path d="M9.5,18h-5C3.67,18,3,17.32,3,16.5v-11C3,4.68,3.67,4,4.5,4H6V2h1.5v2h5V2H14v2h1.5C16.33,4,17,4.68,17,5.5V10h-1.5V9h-11 v7.5h5V18z M17.78,13.99l0.65-0.65c0.29-0.29,0.29-0.77,0-1.06l-0.71-0.71c-0.29-0.29-0.77-0.29-1.06,0l-0.65,0.65L17.78,13.99z M17.19,14.58L12.77,19H11v-1.77l4.42-4.42L17.19,14.58z" />
    </svg>
  );
};
