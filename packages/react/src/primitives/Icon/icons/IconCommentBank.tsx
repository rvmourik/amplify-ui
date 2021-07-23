import React from 'react';
export const IconCommentBank = (props) => {
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
        <path d="M16,3H4C3.45,3,3,3.45,3,4v13l3-3h10c0.55,0,1-0.45,1-1V4C17,3.45,16.55,3,16,3z M15,11l-2-1.31L11,11V5h4V11z" />
      </g>
    </svg>
  );
};
