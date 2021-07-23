import React from 'react';
export const IconBackupTable = (props) => {
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
          <g>
            <path d="M16,6v10H6v1h10c0.55,0,1-0.45,1-1V6H16z" />
          </g>
          <g>
            <path d="M14,13V4c0-0.55-0.45-1-1-1H4C3.45,3,3,3.45,3,4v9c0,0.55,0.45,1,1,1h9C13.55,14,14,13.55,14,13z M4,4h9v4H4V4z M8,13H4 V9h4V13z M9,9h4v4H9V9z" />
          </g>
        </g>
      </g>
    </svg>
  );
};
