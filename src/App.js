import './App.css';
import Counter from './components/Counter';
import MultipleCounter from './components/MultipleCounter';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultipleCounter  />
      </header>
    </div>
  );
}

export default App;
