import { css } from '@emotion/css';
import React from 'react';
import SpeedLimit from '../../../../icons/SpeedLimit';
import SteeringWheel from '../../../../icons/SteeringWheel';

const Controls = () => {
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
      `}
    >
      <SteeringWheel
        className={css`
          width: 48px;
          height: 48px;
        `}
      />
      <SpeedLimit
        className={css`
          width: 48px;
          height: 48px;
        `}
      />
    </div>
  );
};

export default Controls;
