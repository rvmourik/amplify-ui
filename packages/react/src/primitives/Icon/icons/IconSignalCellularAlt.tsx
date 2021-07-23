import React from 'react';
export const IconSignalCellularAlt = (props) => {
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
      <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
    </svg>
  );
};
