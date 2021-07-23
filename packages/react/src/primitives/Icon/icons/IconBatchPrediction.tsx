import React from 'react';
export const IconBatchPrediction = (props) => {
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
        <path d="M14,7H6C5.45,7,5,7.45,5,8v8c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V8C15,7.45,14.55,7,14,7z M10.75,16h-1.5v-1h1.5V16z M10.75,14c0,0-1.15,0-1.5,0c0-1-1.75-2-1.75-3.5C7.5,9.12,8.62,8,10,8c0,0,0,0,0,0c1.38,0,2.5,1.12,2.5,2.5 C12.5,12,10.75,13,10.75,14z M14,6H6v0c0-0.55,0.45-1,1-1h6C13.55,5,14,5.45,14,6L14,6z M13,4H7v0c0-0.55,0.45-1,1-1h4 C12.55,3,13,3.45,13,4L13,4z" />
      </g>
    </svg>
  );
};
