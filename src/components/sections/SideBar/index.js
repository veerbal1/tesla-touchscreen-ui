import React from 'react';
import { css } from '@emotion/css';
import TopInfoBar from './TopInfoBar';
import SpeedoMeter from './Speedometer';
import Driving from './Driving';

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
      <Driving />
    </div>
  );
};

export default SideBar;
