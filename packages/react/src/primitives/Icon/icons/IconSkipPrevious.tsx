import React from 'react';
export const IconSkipPrevious = (props) => {
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
      <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
    </svg>
  );
};
