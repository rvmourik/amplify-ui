import React from 'react';
export const IconMarkEmailUnread = (props) => {
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
        <path d="M17,7.22V15c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h8.18C12.07,4.31,12,4.65,12,5 c0,0.79,0.31,1.5,0.81,2.03L10,8.82L4,5v1.18L10,10l3.66-2.33C14.06,7.87,14.52,8,15,8C15.77,8,16.47,7.7,17,7.22z M13,5 c0,1.1,0.9,2,2,2s2-0.9,2-2s-0.9-2-2-2S13,3.9,13,5z" />
      </g>
    </svg>
  );
};
