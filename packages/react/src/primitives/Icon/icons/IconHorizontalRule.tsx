import React from 'react';
export const IconHorizontalRule = (props) => {
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
        <rect height="2" width="12" x="4" y="9" />
      </g>
      <g>
        <rect fill="none" height="20" width="20" />
        <rect height="2" width="14" x="3" y="9" />
      </g>
    </svg>
  );
};
