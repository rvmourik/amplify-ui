import React from 'react';
export const IconArrowLeft = (props) => {
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
      <path d="M14 7l-5 5 5 5V7z" />
      <path d="M24 0v24H0V0h24z" fill="none" />
    </svg>
  );
};
