import "./App.css";
import KeishaIG from "./KeishaIG.png";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Keisha's Link page</p>
        <img src={KeishaIG} class="max-h-44 max-w-md" alt="keisha pic" />
        <Home />
      </header>
    </div>
  );
}

export default App;
