import React from 'react';
export const IconPin = (props) => {
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
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <g>
          <path d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M7.64,15H6.49v-4.5l-0.9,0.66 l-0.58-0.89L6.77,9h0.87V15z M13.5,15H9.61v-1.02c1.07-1.07,1.77-1.77,2.13-2.15c0.4-0.42,0.54-0.69,0.54-1.06 c0-0.4-0.31-0.72-0.81-0.72c-0.52,0-0.8,0.39-0.9,0.72l-1.01-0.42c0.01-0.02,0.18-0.76,1-1.15c0.69-0.33,1.48-0.2,1.95,0.03 c0.86,0.44,0.91,1.24,0.91,1.48c0,0.64-0.31,1.26-0.92,1.86c-0.25,0.25-0.72,0.71-1.4,1.39l0.03,0.05h2.37V15z M18.75,14.15 C18.67,14.28,18.19,15,16.99,15c-0.04,0-1.6,0.08-2.05-1.51l1.03-0.41c0.03,0.1,0.19,0.86,1.02,0.86c0.41,0,0.89-0.28,0.89-0.77 c0-0.55-0.48-0.79-1.04-0.79h-0.5v-1h0.46c0.33,0,0.88-0.14,0.88-0.72c0-0.39-0.31-0.65-0.75-0.65c-0.5,0-0.74,0.32-0.85,0.64 l-0.99-0.41C15.2,9.9,15.68,9,16.94,9c1.09,0,1.54,0.64,1.62,0.75c0.33,0.5,0.28,1.16,0.02,1.57c-0.15,0.22-0.32,0.38-0.52,0.48 v0.07c0.28,0.11,0.51,0.28,0.68,0.52C19.11,12.91,19.07,13.66,18.75,14.15z" />
        </g>
      </g>
    </svg>
  );
};
