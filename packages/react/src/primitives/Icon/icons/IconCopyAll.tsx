import React from 'react';
export const IconCopyAll = (props) => {
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
      <path d="M15.5,2h-8C6.67,2,6,2.67,6,3.5v10C6,14.33,6.67,15,7.5,15h8c0.83,0,1.5-0.67,1.5-1.5v-10C17,2.67,16.33,2,15.5,2z M15.5,13.5h-8v-10h8V13.5z M3,12v-1.5h1.5V12H3z M3,15v-1.5h1.5V15H3z M9,16.5h1.5V18H9V16.5z M3,7.5h1.5V9H3V7.5z M7.5,18H6v-1.5 h1.5V18z M4.5,18C3.67,18,3,17.33,3,16.5h1.5V18z M4.5,6H3c0-0.83,0.67-1.5,1.5-1.5V6z M13.49,16.5c0,0.83-0.67,1.5-1.5,1.5h0v-1.5 L13.49,16.5L13.49,16.5z" />
    </svg>
  );
};
