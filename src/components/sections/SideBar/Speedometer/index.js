import { css } from '@emotion/css';
import React from 'react';
import BatteryIndicator from './BatteryIndicator';
import GearIndicator from './GearIndicator';
import MPH from './MPH';
import Speed from './Speed';

const SpeedoMeter = () => {
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 0.5rem;
      `}
    >
      <Speed />
      <div
        className={css`
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <GearIndicator />
        <MPH />
        <BatteryIndicator />
      </div>
    </div>
  );
};

export default SpeedoMeter;
