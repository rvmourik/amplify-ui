import React from 'react';
export const IconArrowRightAlt = (props) => {
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
      <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
    </svg>
  );
};
