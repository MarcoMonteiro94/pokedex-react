import "normalize.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Pokedex />
      </main>
      <Footer />
    </div>
  );
}

export default App;
