import React from 'react';
export const IconBubbleChart = (props) => {
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
      <circle cx="7.2" cy="14.4" r="3.2" />
      <circle cx="14.8" cy="18" r="2" />
      <circle cx="15.2" cy="8.8" r="4.8" />
    </svg>
  );
};
