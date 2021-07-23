import React from 'react';
export const IconPriorityHigh = (props) => {
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
      <circle cx="12" cy="19" r="2" />
      <path d="M10 3h4v12h-4z" />
    </svg>
  );
};
