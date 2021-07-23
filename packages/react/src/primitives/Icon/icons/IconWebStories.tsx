import React from 'react';
export const IconWebStories = (props) => {
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
      <path d="M15,3.6c0.88,0,1.6,0.72,1.6,1.6v9.6c0,0.88-0.72,1.6-1.6,1.6V3.6z M3,16.5C3,17.33,3.67,18,4.5,18h7.4 c0.83,0,1.5-0.67,1.5-1.5v-13c0-0.83-0.67-1.5-1.5-1.5H4.5C3.67,2,3,2.67,3,3.5V16.5z M18.2,14.8c0.66,0,1.2-0.54,1.2-1.2V6.4 c0-0.66-0.54-1.2-1.2-1.2V14.8z" />
    </svg>
  );
};
