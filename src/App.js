import logo from './logo.svg';
import './App.css';
import Keyboard from "./components/Keyboard"
import Effect from "./components/Effect"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Keyboard Noise
      </header>
      <div>
        <Effect />
      </div>
      <div>
        <Keyboard />
      </div>



    </div>
  );
}

export default App;
