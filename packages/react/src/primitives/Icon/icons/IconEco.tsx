import React from 'react';
export const IconEco = (props) => {
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
          <path d="M5.53,7.04c-2.05,2.05-2.05,5.36-0.01,7.41c1.11-2.55,3.07-4.68,5.53-5.95C8.97,10.26,7.51,12.71,7,15.49 c1.95,0.92,4.35,0.59,5.96-1.03C15.57,11.86,16,4,16,4S8.14,4.43,5.53,7.04z" />
        </g>
      </g>
    </svg>
  );
};
