import React from 'react';
export const IconIron = (props) => {
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
      <path d="M17,5.5c-1.1,0-2,0.9-2,2V11c0,0.28-0.22,0.5-0.5,0.5H14V8c0-1.1-0.9-2-2-2H8C6.9,6,6,6.9,6,8h1.5c0-0.28,0.22-0.5,0.5-0.5 h4c0.28,0,0.5,0.22,0.5,0.5v1H5c-1.66,0-3,1.34-3,3v2.5h12V13h0.5c1.1,0,2-0.9,2-2V7.5C16.5,7.22,16.72,7,17,7h1V5.5H17z" />
    </svg>
  );
};
