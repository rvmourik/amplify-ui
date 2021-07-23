import React from 'react';
export const IconDeveloperBoardOff = (props) => {
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
      <path d="M16.12,14H18v-1.5h-2v-1.75h2v-1.5h-2V7.5h2V6h-2V4.5C16,3.67,15.33,3,14.5,3H5.12l1.5,1.5h7.88v7.88L16.12,14z M8.12,6H9 v0.88L8.12,6z M13,8h-2.88L10,7.88V6h3V8z M11.12,9H13v1.88L11.12,9z M2.22,2.22L1.16,3.28l0.88,0.88C2.01,4.27,2,4.38,2,4.5v11 C2,16.33,2.67,17,3.5,17h11c0.12,0,0.23-0.01,0.34-0.04l1.88,1.88l1.06-1.06L2.22,2.22z M3.5,15.5V5.62L5,7.12V10h2.88l1,1H5v3h4 v-2.88l1,1V14h1.88l1.5,1.5H3.5z" />
    </svg>
  );
};
