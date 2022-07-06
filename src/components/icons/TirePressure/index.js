import { css, cx } from '@emotion/css';
import React from 'react';
import TyreImg from '../../../assets/icons/tire-pressure.svg';

const TirePressure = ({ className, ...props }) => {
  return (
    <img
      className={cx(
        css`
          width: 32px;
          height: 32px;
        `,
        className
      )}
      src={TyreImg}
      {...props}
      alt={'Tyre Pressure'}
    />
  );
};

export default TirePressure;
