import React from 'react';
export const IconVilla = (props) => {
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
      <path d="M6,17H3V6.89L13,3v5.5H6V17z M15.5,8.5C14.67,8.5,14,9.17,14,10H7.5v7h4v-4H13v4h4v-7C17,9.17,16.33,8.5,15.5,8.5z" />
    </svg>
  );
};
