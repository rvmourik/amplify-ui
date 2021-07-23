import React from 'react';
export const IconStopCircle = (props) => {
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
        <path
          d="M10,3c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S13.87,3,10,3z M13,13H7V7h6V13z"
          fill-rule="evenodd"
        />
      </g>
    </svg>
  );
};
