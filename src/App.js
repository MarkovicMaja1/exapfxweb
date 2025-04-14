
import Header from "./components/Header";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import About from "./components/About";
import Suistanbility from "./components/Sustainability";
import Home from "./components/Home";
// import AboutTeget from "./components/AboutTeget";
import Index from "./components/Index2";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Example from "./components/Example";
import ChoosePlan from "./components/ChoosePlan";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamFirst";
import BlogCarousel from "./components/TeamNew";

import SustainabilityIcon from "./components/SustainabilityIcon";

function App() {
  return (
    <div className="App min-h-scree">
      <BrowserRouter basename="/">
      <div id="navbar">
          <Header/>
        </div>
        <div id="home">
          <Home />
        </div>
        {/* <div id="about">
          <AboutTeget/>
        </div> */}

        <div id="chooseplan">
          <ChoosePlan/>
        </div>
        <div id="dashboard">
          <Dashboard/>
        </div>

        <div id="about">
          <About/>
        </div>
        <div id="goals">
          <Goals/>
        </div>
        <div id="suistanbility">
          <Suistanbility/>
        </div>
        <div id="team">
          <TeamSection/>
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
         <SustainabilityIcon />
      </BrowserRouter>
    </div>
  );
}

export default App;

