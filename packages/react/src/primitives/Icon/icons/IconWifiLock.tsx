import React from 'react';
export const IconWifiLock = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" />
      <g>
        <path d="M17.5,13H17v-1c0-0.82-0.67-1.5-1.5-1.5S14,11.18,14,12v1h-0.5c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h4 c0.28,0,0.5-0.22,0.5-0.5v-3C18,13.22,17.78,13,17.5,13z M14.75,12c0-0.41,0.34-0.75,0.75-0.75c0.41,0,0.75,0.34,0.75,0.75v1h-1.5 V12z M12,15l-2,2l-4.24-4.24L0,7.01C2.6,4.53,6.12,3,10,3c3.88,0,7.4,1.53,10,4.01L17.51,9.5H15c-1.66,0-3,1.34-3,3V15z" />
      </g>
    </svg>
  );
};
