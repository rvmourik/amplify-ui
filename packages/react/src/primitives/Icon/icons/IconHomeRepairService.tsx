import React from 'react';
export const IconHomeRepairService = (props) => {
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
            <polygon points="14,13 13,13 13,12 7,12 7,13 6,13 6,12 3,12 3,16 17,16 17,12 14,12" />
          </g>
          <path d="M16,7h-3V5c0-0.55-0.45-1-1-1H8C7.45,4,7,4.45,7,5v2H4C3.45,7,3,7.45,3,8v3h3v-1h1v1h6v-1h1v1h3V8C17,7.45,16.55,7,16,7z M12,7H8V5h4V7z" />
        </g>
      </g>
    </svg>
  );
};
