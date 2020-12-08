import './App.css';
import { useState } from 'react';
import MultipleCounter from './components/MultipleCounter';

function App() {
  const [numCounter, setnumCounter] = useState(0);
  const [sum, setSum] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <MultipleCounter  />
      </header>
    </div>
  );
}

export default App;
