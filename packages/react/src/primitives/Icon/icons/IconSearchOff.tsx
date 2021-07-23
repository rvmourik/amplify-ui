import React from 'react';
export const IconSearchOff = (props) => {
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
          <path d="M12,11.29c0.62-0.77,1-1.73,1-2.79C13,6.01,10.99,4,8.5,4C6.19,4,4.3,5.75,4.05,8h1C5.29,6.31,6.74,5,8.5,5 C10.43,5,12,6.57,12,8.5S10.43,12,8.5,12c-0.17,0-0.34-0.03-0.5-0.05v1C8.17,12.97,8.33,13,8.5,13c1.06,0,2.02-0.38,2.79-1 l3.57,3.57l0.71-0.71L12,11.29z" />
          <polygon points="5.91,9.38 4.5,10.79 3.09,9.38 2.38,10.09 3.79,11.5 2.38,12.91 3.09,13.62 4.5,12.21 5.91,13.62 6.62,12.91 5.21,11.5 6.62,10.09" />
        </g>
      </g>
    </svg>
  );
};
