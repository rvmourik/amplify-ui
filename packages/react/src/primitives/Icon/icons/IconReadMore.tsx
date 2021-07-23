import React from 'react';
export const IconReadMore = (props) => {
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
          <polygon points="11,10 8,7 8,9.5 3,9.5 3,10.5 8,10.5 8,13" />
          <rect height="1" width="6" x="11" y="7" />
          <rect height="1" width="6" x="11" y="12" />
          <rect height="1" width="4" x="13" y="9.5" />
        </g>
      </g>
    </svg>
  );
};
