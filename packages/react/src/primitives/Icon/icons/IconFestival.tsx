import React from 'react';
export const IconFestival = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <polygon points="10.5,5.36 10.5,4 13,4 12,3 13,2 9.5,2 9.5,5.36 3,10 3,17 8,17 8,13.5 10,12 12,13.5 12,17 17,17 17,10" />
      </g>
    </svg>
  );
};
