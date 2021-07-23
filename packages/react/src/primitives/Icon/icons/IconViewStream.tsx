import React from 'react';
export const IconViewStream = (props) => {
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
      <path d="M4.5,5h11C16.33,5,17,5.6,17,6.34v1.57c0,0.74-0.67,1.34-1.5,1.34h-11C3.67,9.25,3,8.65,3,7.91V6.34C3,5.6,3.67,5,4.5,5z M4.5,15h11c0.83,0,1.5-0.6,1.5-1.34v-1.57c0-0.74-0.67-1.34-1.5-1.34h-11c-0.83,0-1.5,0.6-1.5,1.34v1.57C3,14.4,3.67,15,4.5,15z" />
    </svg>
  );
};
