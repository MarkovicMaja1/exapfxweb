
import Header from "./components/Header";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Suistanbility from "./components/Sustainability";
import Home from "./components/Home";
// import AboutTeget from "./components/AboutTeget";
import Index from "./components/Index";
import Footer from "./components/Footer";
import Goals from "./components/Goals";



function App() {
  return (
    <div className="App min-h-scree">
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
        <div id="goals">
          <Goals/>
        </div>
        {/* <div id="about">
          <AboutTeget/>
        </div> */}
        <div id="index">
          <Index/>
        </div>
        {/* <div id="dashboard">
          <Dashboard/>
        </div> */}
        
        <div id="suistanbility">
          <Suistanbility/>
        </div>
        {/* <div id="suistanbility">
          <Sustainability2/>
        </div> */}
        <div id="footer">
          <Footer/>
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

