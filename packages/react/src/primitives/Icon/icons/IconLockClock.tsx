import React from 'react';
export const IconLockClock = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <path d="M0 0h20v20H0V0z" fill="none" />
      <path d="M12.5 8H11v5l3.6 2.2.8-1.3-2.9-1.7V8zM12 5c-.3 0-.7 0-1 .1V5c0-2.1-1.9-4-4-4S3 2.9 3 5v1h-.5C1.7 6 1 6.7 1 7.5v8c0 .8.7 1.5 1.5 1.5h4.6c1.3 1.2 3 2 4.9 2 3.9 0 7-3.1 7-7s-3.1-7-7-7zM5 5c0-1.1.9-2 2-2s2 .9 2 2v1H5V5zm7 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
    </svg>
  );
};
