import React from 'react';
export const IconArrowForwardIos = (props) => {
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
        <g>
          <rect fill="none" height="20" width="20" />
        </g>
      </g>
      <g>
        <polygon points="4.59,16.59 6,18 14,10 6,2 4.59,3.41 11.17,10" />
      </g>
    </svg>
  );
};
