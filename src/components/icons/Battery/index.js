import { cx, css } from '@emotion/css';
import React from 'react';
import batteryImg from '../../../assets/icons/battery.svg';

const Battery = ({ className, ...props }) => {
  return (
    <img
      className={cx(
        css`
          width: 32px;
          height: 32px;
        `,
        className
      )}
      src={batteryImg}
      {...props}
      alt={'Battery'}
    />
  );
};

export default Battery;
