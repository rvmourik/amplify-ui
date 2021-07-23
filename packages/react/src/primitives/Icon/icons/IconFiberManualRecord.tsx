import React from 'react';
export const IconFiberManualRecord = (props) => {
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
      <path d="M24 24H0V0h24v24z" fill="none" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
};
