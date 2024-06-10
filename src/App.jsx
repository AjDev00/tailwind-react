import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      {/* <Dropdown /> */}
    </div>
  );
}

export default App;
