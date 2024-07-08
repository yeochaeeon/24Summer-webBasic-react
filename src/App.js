import logo from './logo.svg';
import './App.css';
import Hello from './01/Hello';//.js 생략 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="https://github.com/yeochaeeon"
            target="_blank"
            rel="noopener noreferrer"
          >
            여채언's github
          </a>
        </p> */}
        <Hello />
      </header>
    </div>
  );
}

export default App;
