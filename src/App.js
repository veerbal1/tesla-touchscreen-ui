import { jsx, css, Global, ClassNames } from '@emotion/css';

function App() {
  return (
    <div
      className={css`
        width: 100vw;
        height: 100vh;
        ${'' /* background-color: #ff00ff; */}
        display: flex;
        flex-direction: column;
        max-width: 1024px;
        max-height: 768px;
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
          height: 10%;
          background: #000000;
        `}
      ></div>
    </div>
  );
}

export default App;
