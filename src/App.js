import logo from "./logo.svg";
import "./App.css";
import ControlledComponent from "./components/ControlledComponent";
import UncrolledComponent from "./components/UncontrolledComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponent />
        <UncrolledComponent />
      </header>
    </div>
  );
}

export default App;
