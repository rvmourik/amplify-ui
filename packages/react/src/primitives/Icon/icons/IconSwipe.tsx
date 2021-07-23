import React from 'react';
export const IconSwipe = (props) => {
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
          <path d="M16.51,3.49C14.87,1.96,12.56,1,10,1S5.13,1.96,3.49,3.49L2,2v4h4L4.69,4.69C6.02,3.47,7.91,2.7,10,2.7 s3.98,0.77,5.31,1.99L14,6h4V2L16.51,3.49z" />
          <path d="M12.16,11H10.5V6.25C10.5,5.56,9.94,5,9.25,5h0C8.56,5,8,5.56,8,6.25V15l-2.12-0.71c-0.54-0.18-1.13-0.04-1.54,0.36L4,15 l3.56,3.56C7.84,18.84,8.22,19,8.62,19h5.27c0.73,0,1.36-0.53,1.48-1.25l0.61-3.65c0.11-0.65-0.22-1.29-0.81-1.59L12.16,11z" />
        </g>
      </g>
    </svg>
  );
};
