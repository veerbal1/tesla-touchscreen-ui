import { css, cx } from '@emotion/css';
import React from 'react';

const IconButton = ({ children, className, ...props }) => {
  return (
    <button
      className={cx(
        css`
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: scale(1.1);
          }
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
