import { css } from '@emotion/css';
import React from 'react';
import IconButton from '../../../buttons/Icon';
import HeadLights from '../../../icons/HeadLights';
import TirePressure from '../../../icons/TirePressure';

const TopInfoBar = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: space-between;
        padding: 4px 16px;
      `}
    >
      <IconButton
        onClick={() => {
          console.log('Tire Pressure');
        }}
        className={css`
          margin-left: 4em;
        `}
      >
        <TirePressure />
      </IconButton>
      <IconButton
        onClick={() => {
          console.log('Tire Pressure');
        }}
      >
        <HeadLights />
      </IconButton>
    </div>
  );
};

export default TopInfoBar;
