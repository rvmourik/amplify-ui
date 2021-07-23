import React from 'react';
export const IconSpaceDashboard = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <rect fill="none" height="20" width="20" />
      <path d="M10.75,10H17v5.5c0,0.83-0.67,1.5-1.5,1.5h-4.75V10z M4.5,3C3.67,3,3,3.67,3,4.5v10.94C3,16.3,3.7,17,4.56,17h4.69V3H4.5z M17,8.5v-4C17,3.67,16.33,3,15.5,3h-4.75v5.5H17z" />
    </svg>
  );
};
