import React from 'react';
export const IconPushPin = (props) => {
  const { size = 'medium', fill = 'currentColor', ariaLabel, ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <g>
        <rect fill="none" height="20" width="20" />
      </g>
      <g>
        <g>
          <path d="M15,10c-1.1,0-2-0.9-2-2V4h0.5C13.78,4,14,3.78,14,3.5C14,3.22,13.78,3,13.5,3h-7C6.22,3,6,3.22,6,3.5 C6,3.78,6.22,4,6.5,4H7v4c0,1.1-0.9,2-2,2v1h4.5v5.5L10,17l0.5-0.5V11H15V10z" />
        </g>
      </g>
    </svg>
  );
};
