import React from 'react';
export const IconDarkMode = (props) => {
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
      <path d="M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7c0-0.36-0.03-0.72-0.08-1.06C16.16,10,14.91,10.7,13.5,10.7 c-2.32,0-4.2-1.88-4.2-4.2c0-1.41,0.7-2.66,1.76-3.42C10.72,3.03,10.36,3,10,3L10,3z" />
    </svg>
  );
};
