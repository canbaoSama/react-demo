import logo from './logo.svg';
import './App.css';

function App(data) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="showPrice">
          <p className="price-tip">1 USDT is roughly</p>
          <span className="price-detail">{data}</span>&nbsp;&nbsp;&nbsp;CNY
        </div>
      </header>
    </div>
  );
}

export default App;
