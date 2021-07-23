import React from 'react';
export const IconDoubleArrow = (props) => {
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
        <polygon points="9.21,15 12.43,15 16,10 12.43,5 9.21,5 12.79,10" />
        <polygon points="4.21,15 7.43,15 11,10 7.43,5 4.21,5 7.79,10" />
      </g>
    </svg>
  );
};
