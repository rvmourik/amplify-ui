import React from 'react';
export const IconMotionPhotosOn = (props) => {
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
      <path d="M3.5,4.75c0-0.69,0.56-1.25,1.25-1.25S6,4.06,6,4.75S5.44,6,4.75,6S3.5,5.44,3.5,4.75z M10,2C8.83,2,7.72,2.26,6.71,2.71 l1.15,1.15C8.54,3.63,9.25,3.5,10,3.5c3.58,0,6.5,2.92,6.5,6.5s-2.92,6.5-6.5,6.5S3.5,13.58,3.5,10c0-0.75,0.13-1.46,0.37-2.13 L2.71,6.71C2.26,7.72,2,8.83,2,10c0,4.42,3.58,8,8,8s8-3.58,8-8C18,5.58,14.42,2,10,2z M5,10c0-2.76,2.24-5,5-5s5,2.24,5,5 c0,2.76-2.24,5-5,5S5,12.76,5,10z" />
    </svg>
  );
};
