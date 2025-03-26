
import Header from "./components/Header";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Suistanbility from "./components/Sustainability";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
      <div id="navbar">
          <Header />
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="suistanbility">
          <Suistanbility/>
        </div>
  
        {/* <div id="about">
          <About />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

