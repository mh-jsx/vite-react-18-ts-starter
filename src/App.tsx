import { useState } from 'react';

import reactLogo from 'assets/react.svg';
import ViteLogo from 'assets/vite.svg?react';
import Test from 'components/test';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const asd = () => {};
  const b = () => {
    asd();
  };

  return (
    <>
      {b()}
      <div>
        <Test />
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <ViteLogo width={100} height={100} />
            {/* <img src={ViteLogo} className="logo" alt="Vite logo" /> */}
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
