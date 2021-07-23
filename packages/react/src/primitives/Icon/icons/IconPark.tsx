import React from 'react';
export const IconPark = (props) => {
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
        <polygon points="13,10 15,10 9.97,3 5,10 7,10 4,14 9,14 9,17 11.03,17 11.03,14 16,14" />
      </g>
    </svg>
  );
};
