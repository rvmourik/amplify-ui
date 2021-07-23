import React from 'react';
export const IconIncompleteCircle = (props) => {
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
      <path d="M18,10c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-2.21,0.9-4.21,2.34-5.66L10,10V2C14.42,2,18,5.58,18,10z" />
    </svg>
  );
};
