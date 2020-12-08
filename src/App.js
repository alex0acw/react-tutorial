import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter.js"
import CounterGroup from './components/CounterGroup';
import { useEffect, useState } from 'react';
import CounterGroupSum from './components/CounterGroupSum';
import CounterSizeGenerator from './components/CounterSizeGenerator';

function App() {
  const [numCounter, setnumCounter] = useState(0);
  const [sum, setSum] = useState(0)
  
  return (
    <div className="App">
      <header className="App-header">
        <CounterSizeGenerator
          initNum={0}
          onNumChange={(newNum) => (setnumCounter(newNum))}
        />
        <CounterGroupSum sum={sum}></CounterGroupSum>
        <CounterGroup numCounter={numCounter}
          onSumChange={(newSum) => {
            setSum(newSum)
          }}
        />
      </header>
    </div>
  );
}

export default App;
