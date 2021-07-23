import React from 'react';
export const IconDeck = (props) => {
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
          <polygon points="17,8 10,3 3,8 9.5,8 9.5,17 10.5,17 10.5,8" />
          <polygon points="4.92,13 4.37,10 3.38,10.18 4,13.5 4,17 5,17 5,14 7,14 7,17 8,17 8,13" />
          <polygon points="15.63,10 15.08,13 12,13 12,17 13,17 13,14 15,14 15,17 16,17 16,13.5 16.62,10.18" />
        </g>
      </g>
    </svg>
  );
};
