import React from 'react';
export const IconHourglassTop = (props) => {
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
        <path d="M14,3H6v4l3,3l-3,3v4h8v-4l-3-3l3-3V3z M13,13.41V16H7v-2.59l3-3L13,13.41z" />
      </g>
    </svg>
  );
};
