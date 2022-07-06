import { cx, css } from '@emotion/css';
import React from 'react';
import steeringWheelImg from '../../../assets/icons/steering-wheel.svg';

const SteeringWheel = ({ className, ...props }) => {
  return (
    <img
      className={cx(
        css`
          width: 32px;
          height: 32px;
        `,
        className
      )}
      src={steeringWheelImg}
      {...props}
      alt={'Battery'}
    />
  );
};

export default SteeringWheel;
