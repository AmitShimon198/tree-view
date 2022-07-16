import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './Tree';

function App() {
  const [treeData, setTreeData] = useState<any>()
  useEffect(() => {
    fetch('http://localhost:4000').then(res => res.json()).then(data => setTreeData(data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Tree data={treeData} />
      </header>
    </div>
  );
}

export default App;
