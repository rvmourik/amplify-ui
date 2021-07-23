import React from 'react';
export const IconSchema = (props) => {
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
      <path d="M11.5,7.75v1.5h-2v-1.5h-2V6.5h2V2H4v4.5h2v1.25H4v4.5h2V14H4v4.5h5.5V14h-2v-1.75h2v-1.5h2v1.5H17v-4.5H11.5z" />
    </svg>
  );
};
