import React from 'react';
export const IconAmpStories = (props) => {
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
          <rect height="11" width="8" x="6" y="4" />
          <rect height="9" width="1" x="3" y="5" />
          <rect height="9" width="1" x="16" y="5" />
        </g>
      </g>
    </svg>
  );
};
