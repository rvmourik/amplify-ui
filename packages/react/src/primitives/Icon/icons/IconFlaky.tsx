import React from 'react';
export const IconFlaky = (props) => {
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
          <g>
            <path
              d="M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7s7-3.13,7-7C17,6.13,13.87,3,10,3z M6,6.71L6.71,6l1.06,1.06L8.83,6l0.71,0.71L8.47,7.77l1.06,1.06L8.83,9.54L7.77,8.47L6.71,9.54L6,8.83l1.06-1.06L6,6.71z M10,16 c-1.65,0-3.15-0.67-4.24-1.76l8.48-8.48C15.33,6.85,16,8.35,16,10C16,13.31,13.31,16,10,16z"
              fill-rule="evenodd"
            />
          </g>
          <g>
            <polygon
              fill-rule="evenodd"
              points="11.41,12.59 10.41,11.59 9.71,12.29 11.41,14 14.21,11.21 13.5,10.5"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
