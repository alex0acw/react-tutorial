import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter.js"
import CounterGroup from './components/CounterGroup';
import { useEffect, useState } from 'react';
import CounterGroupSum from './components/CounterGroupSum';

function App() {
  const [numCounter, setnumCounter] = useState(0);
  const onChange = (e) => {
    setnumCounter(parseInt(e.target.value));
  }

  useEffect(() => {
    // action on update of movies
  }, [numCounter]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" onChange={onChange}></input>
        <CounterGroupSum></CounterGroupSum>
        <CounterGroup numCounter={numCounter} />
      </header>
    </div>
  );
}

export default App;
