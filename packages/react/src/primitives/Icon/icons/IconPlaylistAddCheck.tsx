import React from 'react';
export const IconPlaylistAddCheck = (props) => {
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
          <polygon points="16.94,9.34 13.4,12.88 11.64,11.11 10.58,12.17 13.4,15 18,10.4" />
          <rect height="1.5" width="9" x="3" y="5" />
          <rect height="1.5" width="6" x="3" y="11.25" />
          <rect height="1.5" width="9" x="3" y="8.12" />
        </g>
      </g>
    </svg>
  );
};
