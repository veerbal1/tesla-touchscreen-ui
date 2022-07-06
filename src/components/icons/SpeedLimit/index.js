import { cx, css } from '@emotion/css';
import React from 'react';
import speedLimitImg from '../../../assets/icons/speed-limit.svg';

const SpeedLimit = ({ className, ...props }) => {
  return (
    <img
      className={cx(
        css`
          width: 32px;
          height: 32px;
        `,
        className
      )}
      src={speedLimitImg}
      {...props}
      alt={'Speed Limit'}
    />
  );
};

export default SpeedLimit;
