import { createStore } from 'redux';
import './App.css';
import MultipleCounter from './components/MultipleCounter';
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers"


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MultipleCounter />
      </Provider>
    </div>
  );
}

export default App;
