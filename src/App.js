import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import Soon from "./components/Soon";
import Discord from "./components/Discord";
import Faq from "./components/Faq.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PricingTable from './components/pricingtable.jsx';
// import Dashboard from "./components/Dashboard";
import Terms from "./components/Terms";
import Claim from "./components/Claim";
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./components/About";
import Sustainability from "./components/Sustainability"; // Fixed typo
import Home from "./components/Home";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import ChoosePlan from "./components/ChoosePlan";

import TeamSection from "./components/TeamFirst";
import Newsletter from "./components/Newsletter";
import SustainabilityIcon from "./components/SustainabilityIcon";
import { useEffect } from "react";

const ScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        const offset = 60;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    } else if (pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/claim') {
      window.scrollTo({ top: 0, behavior: 'smooth' });  
    }
  }, [hash, pathname]);

  return null;
};

// Simple 404 fallback component
const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4 text-lg">Sorry, the page you're looking for doesn't exist.</p>
  </div>
);

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter basename="/">
        <ScrollToSection />
        <div id="navbar">
          <Header />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <div id="soon">
                  <Soon />
                </div> */}
                <div id="home">
                  <Home />
                </div>
                <div id="chooseplan">
                  <ChoosePlan />
                </div>
                {/* <div id="dashboard">
                  <Dashboard />
                </div> */}
                <div id="pricingtable">
                  <PricingTable />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="goals">
                  <Goals />
                </div>
                <div id="sustainability">
                  <Sustainability />
                </div>
                <div id="team">
                  <TeamSection />
                </div>
                <div id="discord">
                  <Discord />
                </div>
                <div id="newsletter">
                  <Newsletter />
                </div>
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Route */}
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
