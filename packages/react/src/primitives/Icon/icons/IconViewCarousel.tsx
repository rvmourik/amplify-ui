import React from 'react';
export const IconViewCarousel = (props) => {
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
      <path d="M2,6.5h3v7H2V6.5z M15,6.5v7h3v-7H15z M6,5h8v10H6V5z" />
    </svg>
  );
};
