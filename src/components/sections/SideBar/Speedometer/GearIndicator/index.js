import { css } from '@emotion/css';
import React from 'react';

const GearIndicator = () => {
  return (
    <div
      className={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {['P', 'R', 'N', 'D'].map((gear, index) => {
        return (
          <span
            className={css([
              {
                color: 'rgba(0, 0, 0, 0.4)',
                margin: '0 0.5rem',
                fontWeight: 500,
              },
              index === 3 && {
                color: 'rgba(0, 0, 0, 1)',
              },
            ])}
          >
            {gear}
          </span>
        );
      })}
    </div>
  );
};

export default GearIndicator;
