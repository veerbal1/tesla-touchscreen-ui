import React from 'react';
import { css } from '@emotion/css';
import TopInfoBar from './TopInfoBar';

const SideBar = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 100%;
      `}
    >
      <TopInfoBar />
    </div>
  );
};

export default SideBar;
