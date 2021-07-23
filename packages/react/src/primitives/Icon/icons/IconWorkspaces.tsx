import React from 'react';
export const IconWorkspaces = (props) => {
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
          <circle cx="5" cy="14" r="3" />
          <circle cx="10" cy="6" r="3" />
          <circle cx="15" cy="14" r="3" />
        </g>
      </g>
    </svg>
  );
};
