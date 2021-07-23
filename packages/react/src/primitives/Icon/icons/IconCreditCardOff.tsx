import React from 'react';
export const IconCreditCardOff = (props) => {
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
      <path d="M6.12,4H16.5C17.33,4,18,4.67,18,5.5v9c0,0.38-0.15,0.73-0.38,1l-5.5-5.5h4.38V7H9.12L6.12,4z M16.72,18.84L13.88,16H3.5 C2.67,16,2,15.33,2,14.5v-9c0-0.38,0.15-0.73,0.38-1L1.16,3.28l1.06-1.06l15.56,15.56L16.72,18.84z M7.88,10l-3-3H3.5v3H7.88z" />
    </svg>
  );
};
