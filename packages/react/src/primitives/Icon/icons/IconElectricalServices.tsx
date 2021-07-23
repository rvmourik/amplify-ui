import React from 'react';
export const IconElectricalServices = (props) => {
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
          <path d="M16,11.5c0-0.28-0.22-0.5-0.5-0.5H14v1h1.5C15.78,12,16,11.78,16,11.5z" />
          <path d="M15.5,14H14v1h1.5c0.28,0,0.5-0.22,0.5-0.5C16,14.22,15.78,14,15.5,14z" />
          <path d="M9,11v1H8v2h1l0,1c0,0.55,0.45,1,1,1h3v-6h-3C9.45,10,9,10.45,9,11z" />
          <path d="M6.75,9H7.5C8.88,9,10,7.88,10,6.5C10,5.12,8.88,4,7.5,4h-2C5.22,4,5,4.22,5,4.5C5,4.78,5.22,5,5.5,5h2 C8.33,5,9,5.67,9,6.5S8.33,8,7.5,8H6.75C5.23,8,4,9.23,4,10.75s1.23,2.75,2.75,2.75H7v-1H6.75C5.78,12.5,5,11.72,5,10.75 S5.78,9,6.75,9z" />
        </g>
      </g>
    </svg>
  );
};
