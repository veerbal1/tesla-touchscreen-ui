import { css } from '@emotion/css';
import React from 'react';
import Controls from './Controls';

const Driving = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 58.33%;
      `}
    >
      <Controls />
    </div>
  );
};

export default Driving;
