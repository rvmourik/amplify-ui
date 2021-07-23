import React from 'react';
export const IconElectricRickshaw = (props) => {
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
        <polygon points="7,16 9.5,16 9.5,15 13,17 10.5,17 10.5,18" />
        <path d="M17,9.05v-1.7c0-0.23-0.08-0.45-0.22-0.62L13.3,2.38C13.11,2.14,12.82,2,12.52,2H2C1.45,2,1,2.45,1,3v8c0,0.55,0.45,1,1,1 h1.05c0.23,1.14,1.24,2,2.45,2s2.22-0.86,2.45-2h6.1c0.28,1.38,1.69,2.34,3.22,1.89c0.77-0.23,1.39-0.85,1.62-1.62 C19.34,10.74,18.38,9.33,17,9.05z M5.5,13C4.67,13,4,12.33,4,11.5S4.67,10,5.5,10S7,10.67,7,11.5S6.33,13,5.5,13z M7,7H2V3h5V7z M12,11H8V8h2V7H8V3h4V11z M13,7V3.6L15.72,7H13z M16.5,13c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5 S17.33,13,16.5,13z" />
      </g>
    </svg>
  );
};
