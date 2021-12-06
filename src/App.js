import "./App.css";
import KeishaIG from "./KeishaIG.png";
import Home from "./home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <h1 class="text-7xl text-yellow-200">Keisha "WriteNow" Allen</h1>
        <h3 class="text-3xl">
          Author of Worth the Weight: A Love like No Other
        </h3>
        <h3 class="text-2xl">Kreative Kreations Publishing </h3>
        <img
          src={KeishaIG}
          class="max-h-36 max-w-md  rounded"
          alt="keisha pic"
        />
        <Home />
        <Footer />
      </header>
    </div>
  );
}

export default App;
