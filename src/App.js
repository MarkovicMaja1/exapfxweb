import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Soon from "./components/Soon";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./components/About";
import Sustainability from "./components/Sustainability"; // Fixed typo
import Home from "./components/Home";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import ChoosePlan from "./components/ChoosePlan";
import Dashboard from "./components/Dashboard";
import TeamSection from "./components/TeamFirst";
import SustainabilityIcon from "./components/SustainabilityIcon";
import { useEffect } from "react";

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Scroll with an offset to account for the fixed header (assuming ~80px height)
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <div className="App min-h-screen"> {/* Fixed typo: min-h-scree -> min-h-screen */}
      <BrowserRouter basename="/">
        <ScrollToSection />
        <div id="navbar">
          <Header />
        </div>
        <Routes>
          {/* Default route with all sections */}
          <Route
            path="/"
            element={
              <>
                <div id="soon">
                  <Soon />
                </div>
                <div id="home">
                  <Home />
                </div>
                <div id="chooseplan">
                  <ChoosePlan />
                </div>
                <div id="dashboard">
                  <Dashboard />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="goals">
                  <Goals />
                </div>
                <div id="sustainability"> {/* Fixed typo: suistanbility -> sustainability */}
                  <Sustainability />
                </div>
                <div id="team">
                  <TeamSection />
                </div>
              </>
            }
          />
          {/* Separate Privacy Policy route */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <SustainabilityIcon />
        <div id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;