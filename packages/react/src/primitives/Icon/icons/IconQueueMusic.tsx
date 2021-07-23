import React from 'react';
export const IconQueueMusic = (props) => {
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
        <g>
          <rect height="1.5" width="9" x="3" y="5" />
          <rect height="1.5" width="6" x="3" y="11" />
          <rect height="1.5" width="9" x="3" y="8" />
          <path d="M18,5h-4v6.21C13.69,11.08,13.36,11,13,11c-1.38,0-2.5,1.12-2.5,2.5c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5v-7H18V5z" />
        </g>
      </g>
    </svg>
  );
};
