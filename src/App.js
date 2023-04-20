import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.body.clientHeight);    
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Client height <code>{height}</code>
        </p>
        <a
          className="App-link"
          href="#action"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
