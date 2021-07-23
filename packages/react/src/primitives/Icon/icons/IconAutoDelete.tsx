import React from 'react';
export const IconAutoDelete = (props) => {
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
          <polygon points="13,4 11,4 10,3 6,3 5,4 3,4 3,5 13,5" />
          <path d="M12.5,8c-0.17,0-0.33,0.03-0.5,0.05V6H4v8c0,0.55,0.45,1,1,1h3.76c0.81,1.21,2.18,2,3.74,2c2.49,0,4.5-2.01,4.5-4.5 S14.99,8,12.5,8z M12.5,16C10.57,16,9,14.43,9,12.5S10.57,9,12.5,9s3.5,1.57,3.5,3.5S14.43,16,12.5,16z" />
          <polygon points="13,12.42 13,10 12,10 12,13 14.6,14.5 15.1,13.63" />
        </g>
      </g>
    </svg>
  );
};
