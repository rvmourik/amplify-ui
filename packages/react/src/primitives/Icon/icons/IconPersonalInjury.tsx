import React from 'react';
export const IconPersonalInjury = (props) => {
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
      <path d="M7,5c0-1.66,1.34-3,3-3s3,1.34,3,3s-1.34,3-3,3S7,6.66,7,5z M14.5,18c0.83,0,1.5-0.67,1.5-1.5v-4.41 c0-0.7-0.36-1.36-0.97-1.72C14.7,10.17,14.36,10,14,9.84V18H14.5z M10.34,14l2.16-4.68C11.7,9.11,10.86,9,10,9 c-1.84,0-3.56,0.5-5.03,1.37C4.36,10.73,4,11.39,4,12.09V18h1.8c-0.19-0.38-0.3-0.8-0.3-1.25C5.5,15.23,6.73,14,8.25,14H10.34z M8.5,18l1.15-2.5h-1.4C7.56,15.5,7,16.06,7,16.75S7.56,18,8.25,18H8.5z" />
    </svg>
  );
};
