import React from 'react';
export const IconTableRows = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" x="0" y="0" />
      <path d="M17,7H3V4h14V7z M17,8.5H3v3h14V8.5z M17,13H3v3h14V13z" />
    </svg>
  );
};
