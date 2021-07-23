import React from 'react';
export const IconSignalCellularNull = (props) => {
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
      <path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" />
    </svg>
  );
};
