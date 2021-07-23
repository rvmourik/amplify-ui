import React from 'react';
export const IconGite = (props) => {
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
      <path d="M18,8.5l-3-3c0,0,0,0,0,0H7.5V4H6v1.5H5l-3,3V15c0,0,0,0,0,0h9.5H13h5c0,0,0,0,0,0L18,8.5C18,8.5,18,8.5,18,8.5z M3.5,13.5 V10h8v3.5H3.5z M16.5,13.5H13V9.12l1.75-1.75l1.75,1.75V13.5z" />
    </svg>
  );
};
