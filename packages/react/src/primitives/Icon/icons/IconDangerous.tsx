import React from 'react';
export const IconDangerous = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path d="M0 0h20v20H0z" fill="none" />
      <path d="M13.3 2L18 6.7v6.6L13.3 18H6.7L2 13.3V6.7L6.7 2h6.6zm.7 5l-1-1-3 3-3-3-1 1 3 3-3 3 1 1 3-3 3 3 1-1-3-3 3-3z" />
    </svg>
  );
};
