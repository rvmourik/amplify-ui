import React from 'react';
export const IconSyncAlt = (props) => {
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
        <g />
        <g>
          <polygon points="14,10 17,7 14,4 14,6 4,6 4,8 14,8" />
          <polygon points="6,10 3,13 6,16 6,14 16,14 16,12 6,12" />
        </g>
      </g>
    </svg>
  );
};
