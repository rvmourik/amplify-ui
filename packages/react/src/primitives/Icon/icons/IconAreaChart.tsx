import React from 'react';
export const IconAreaChart = (props) => {
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
      <path d="M17,13.08L9.71,7.24l-3.03,4.15L3,8.62V6l3,2l4-5l4,3h3V13.08z M17,15l-7-5.61L7,13.5l-4-3V16h14V15z" />
    </svg>
  );
};
