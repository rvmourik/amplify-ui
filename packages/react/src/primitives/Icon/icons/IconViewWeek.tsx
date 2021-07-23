import React from 'react';
export const IconViewWeek = (props) => {
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
      <path d="M4.83,16H3.5C2.67,16,2,15.33,2,14.5v-9C2,4.67,2.67,4,3.5,4h1.33c0.83,0,1.5,0.67,1.5,1.5v9C6.33,15.33,5.66,16,4.83,16z M12.17,14.5v-9c0-0.83-0.67-1.5-1.5-1.5H9.33c-0.83,0-1.5,0.67-1.5,1.5v9c0,0.83,0.67,1.5,1.5,1.5h1.33 C11.5,16,12.17,15.33,12.17,14.5z M18,14.5v-9C18,4.67,17.33,4,16.5,4h-1.33c-0.83,0-1.5,0.67-1.5,1.5v9c0,0.83,0.67,1.5,1.5,1.5 h1.33C17.33,16,18,15.33,18,14.5z" />
    </svg>
  );
};
