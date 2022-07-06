import { css, } from '@emotion/css';
import SideBar from './components/sections/SideBar';

function App() {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        ${'' /* background-color: #ff00ff; */}
        display: flex;
        flex-direction: column;
        max-width: 1385px;
        max-height: 866px;
      `}
    >
      <div
        className={css`
          width: 100%;
          height: 90%;
          display: flex;
        `}
      >
        <div
          className={css`
            height: 100%;
            width: 30%;
            background-color: #f1f1f1;
          `}
        >
          {/* SideBar section */}
          <SideBar />
        </div>
        <div
          className={css`
            height: 100%;
            width: 70%;
            background-color: #ffffff;
          `}
        >
          {/* Main Content section */}
        </div>
      </div>
      <div
        className={css`
          width: 100%;
          height: 10.6%;
          background: #000000;
        `}
      ></div>
    </div>
  );
}

export default App;
