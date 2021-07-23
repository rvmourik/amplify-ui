import React from 'react';
export const IconAddRoad = (props) => {
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
          <rect height="12" width="1" x="4" y="4" />
          <rect height="7" width="1" x="15" y="4" />
          <rect height="2" width="1" x="9.5" y="4" />
          <rect height="2" width="1" x="9.5" y="14" />
          <polygon points="18,15 16,15 16,13 15,13 15,15 13,15 13,16 15,16 15,18 16,18 16,16 18,16" />
          <rect height="2" width="1" x="9.5" y="9" />
        </g>
      </g>
    </svg>
  );
};
