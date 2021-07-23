import React from 'react';
export const IconArrowBackIosNew = (props) => {
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
      <polygon points="14.41,3.41 13,2 5,10 13,18 14.41,16.59 7.83,10" />
    </svg>
  );
};
