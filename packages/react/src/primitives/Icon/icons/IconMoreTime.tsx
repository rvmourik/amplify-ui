import React from 'react';
export const IconMoreTime = (props) => {
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
          <polygon points="8.5,8.05 8.5,12.05 11.67,13.95 12.17,13.13 9.5,11.55 9.5,8.05" />
          <path d="M13.9,10c0.07,0.32,0.1,0.66,0.1,1c0,2.76-2.24,5-5,5s-5-2.24-5-5s2.24-5,5-5c0.71,0,1.39,0.15,2,0.42V5.35 C10.37,5.13,9.7,5,9,5c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6c0-0.34-0.04-0.67-0.09-1H13.9z" />
          <polygon points="15,6 15,4 14,4 14,6 14,6 12,6 12,7 14,7 14,9 15,9 15,7 15,7 17,7 17,6" />
        </g>
      </g>
    </svg>
  );
};
