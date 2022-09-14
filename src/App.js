import logo from './logo.svg';
import './App.css';
import Keyboard from "./components/Keyboard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Keyboard Noise
      </header>

      <div>
        <Keyboard />
      </div>

    </div>
  );
}

export default App;
