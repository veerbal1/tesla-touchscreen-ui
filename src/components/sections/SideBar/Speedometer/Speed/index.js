import { css } from '@emotion/css';
import React, { useEffect } from 'react';

const Speed = () => {
  const [speed, setSpeed] = React.useState(99);
  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 100));
  }, []);
  return (
    <div
      className={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <h1
        className={css`
          font-size: 4.5rem;
          font-weight: 500;
        `}
      >
        {speed}
      </h1>
    </div>
  );
};

export default Speed;
