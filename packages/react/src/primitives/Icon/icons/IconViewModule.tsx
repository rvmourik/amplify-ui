import React from 'react';
export const IconViewModule = (props) => {
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
      <path d="M8,15v-4.5h4V15H8z M13,9.5h4V5h-4V9.5z M8,5v4.5h4V5H8z M7,9.5V5H3v4.5H7z M13,10.5V15h4v-4.5H13z M7,10.5H3V15h4V10.5z" />
    </svg>
  );
};
