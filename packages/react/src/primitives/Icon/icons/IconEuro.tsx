import React from 'react';
export const IconEuro = (props) => {
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
        <rect fill="none" height="20" width="20" x="0" />
      </g>
      <g>
        <g />
        <path d="M12,15c-1.63,0-3.06-0.79-3.98-2H12l1-2H7.1C7.04,10.68,7,10.34,7,10s0.04-0.68,0.1-1H12l1-2H8.02C8.94,5.79,10.37,5,12,5 c1.38,0,2.63,0.56,3.54,1.46l1.41-1.41C15.68,3.78,13.93,3,12,3C9.21,3,6.81,4.64,5.68,7H3L2,9h3.08C5.03,9.33,5,9.66,5,10 s0.03,0.67,0.08,1H3l-1,2h3.68c1.12,2.36,3.53,4,6.32,4c1.93,0,3.68-0.78,4.95-2.05l-1.41-1.41C14.63,14.44,13.38,15,12,15z" />
      </g>
    </svg>
  );
};
