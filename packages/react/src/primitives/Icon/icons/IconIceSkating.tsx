import React from 'react';
export const IconIceSkating = (props) => {
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
      <path d="M17.5,14c0,1.38-1.12,2.5-2.5,2.5h-1.5V15H16v-3c0-1.1-0.72-2.08-1.78-2.4l-3.4-1.03c-0.33-0.1-0.6-0.3-0.79-0.57H7.5 C7.22,8,7,7.77,7,7.5S7.22,7,7.5,7h2.25V6H7.5C7.22,6,7,5.77,7,5.5S7.22,5,7.5,5h2.25V2.5H3V15h2.5v1.5H2V18h13c2.21,0,4-1.79,4-4 H17.5z M12,16.5H7V15h5V16.5z" />
    </svg>
  );
};
