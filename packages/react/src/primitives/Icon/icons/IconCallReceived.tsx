import React from 'react';
export const IconCallReceived = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
      viewBox="0 0 24 24"
      className="amplify-ui-icon"
    >
      <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" />
    </svg>
  );
};
