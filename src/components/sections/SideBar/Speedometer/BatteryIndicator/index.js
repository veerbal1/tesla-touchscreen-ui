import { css } from '@emotion/css';
import React from 'react';
import Battery from '../../../../icons/Battery';

const BatteryIndicator = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        className={css`
          margin-right: 0.5rem;
          color: rgba(0, 0, 0, 0.4);
        `}
      >
        90%
      </span>
      <Battery
        className={css`
          width: 40px;
          height: 40px;
        `}
      />
    </div>
  );
};

export default BatteryIndicator;
