import React from 'react';
export const IconAndroid = (props) => {
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
        <g>
          <g>
            <rect fill="none" height="20" width="20" />
          </g>
        </g>
      </g>
      <g>
        <path d="M14.36,8.14l1.57-2.72c0.14-0.24,0.06-0.54-0.18-0.68c-0.24-0.14-0.54-0.06-0.68,0.18l-1.6,2.78C12.4,7.25,11.23,7,10,7 S7.6,7.25,6.54,7.7l-1.6-2.78C4.8,4.68,4.49,4.6,4.25,4.74C4.01,4.87,3.93,5.18,4.07,5.42l1.57,2.72C3.15,9.52,1.39,12.04,1.06,15 h17.88C18.61,12.04,16.85,9.52,14.36,8.14z M6,13c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S6.55,13,6,13z M14,13 c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S14.55,13,14,13z" />
      </g>
    </svg>
  );
};
