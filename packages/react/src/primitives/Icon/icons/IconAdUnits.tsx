import React from 'react';
export const IconAdUnits = (props) => {
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
      <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z" />
    </svg>
  );
};
