import { cx,css } from '@emotion/css';
import React from 'react';
import headLightsImg from '../../../assets/icons/headlights.svg';

const HeadLights = ({ className, ...props }) => {
  return (
    <img
      className={cx(
        css`
          width: 32px;
          height: 32px;
        `,
        className
      )}
      src={headLightsImg}
      {...props}
      alt={'HeadLights'}
    />
  );
};

export default HeadLights;
