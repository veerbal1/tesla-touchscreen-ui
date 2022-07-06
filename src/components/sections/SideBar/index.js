import React from 'react';
import { css } from '@emotion/css';
import TopInfoBar from './TopInfoBar';
import SpeedoMeter from './Speedometer';

const SideBar = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <TopInfoBar />
      <SpeedoMeter />
    </div>
  );
};

export default SideBar;
