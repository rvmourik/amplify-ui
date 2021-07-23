import React from 'react';
export const IconAlignHorizontalLeft = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
      data-size={size}
      aria-label={ariaLabel}
      fill={fill}
      {...rest}
      viewBox="0 0 24 24"
      className="amplify-ui-icon"
    >
      <rect fill="none" height="24" width="24" />
      <path d="M4,22H2V2h2V22z M22,7H6v3h16V7z M16,14H6v3h10V14z" />
    </svg>
  );
};
