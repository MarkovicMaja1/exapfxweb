
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./components/About";
import Suistanbility from "./components/Sustainability";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import ChoosePlan from "./components/ChoosePlan";
import Dashboard from "./components/Dashboard";
import TeamSection from "./components/TeamFirst";
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
        <div id="footer">
          <Footer/>
        </div>
         <SustainabilityIcon />
      </BrowserRouter>
    </div>
  );
}

export default App;

