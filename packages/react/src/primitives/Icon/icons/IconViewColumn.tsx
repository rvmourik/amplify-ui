import React from 'react';
export const IconViewColumn = (props) => {
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
      <path d="M13,15h4V5h-4V15z M8,5v10h4V5H8z M7,15V5H3v10H7z" />
    </svg>
  );
};
