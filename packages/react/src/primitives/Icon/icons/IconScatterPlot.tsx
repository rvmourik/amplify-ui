import React from 'react';
export const IconScatterPlot = (props) => {
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
      <path d="M0 0h24v24H0V0z" fill="none" />
      <g>
        <circle cx="7" cy="14" r="3" />
        <circle cx="11" cy="6" r="3" />
        <circle cx="16.6" cy="17.6" r="3" />
      </g>
    </svg>
  );
};
