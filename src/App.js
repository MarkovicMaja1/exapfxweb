import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import Contact from './components/Contact.jsx';
import Discord from "./components/Discord";
import Testimonials from "./components/Testimonials";
import Cookies from "./components/Cookies.jsx";
import LogoSlider from "./components/LogoSlider.jsx";
// import Compare from "./components/compare.jsx";
import Faq from "./components/Faq.jsx";
import Rules from "./components/Rules.jsx";
import Howitworks from "./components/howitworks.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PricingTable from './components/pricingtable.jsx';
import Terms from "./components/Terms";
import Claim from "./components/Claim";
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from "./components/About";
import Sustainability from "./components/Sustainability";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import TeamSection from "./components/TeamFirst";
import Newsletter from "./components/Newsletter";
import SustainabilityIcon from "./components/SustainabilityIcon";
import ScrollToTop from "./components/ScrollToTop"; 
import { useEffect } from "react";

const ScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      let retries = 0;
      const maxRetries = 30; // Increased for slower dynamic content
      const retryDelay = 300; // Increased to 300ms for reliability

      const attemptScroll = () => {
        if (hash) {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            const offset = 125; // Adjust for fixed header
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth',
            });
            console.log(`Scrolled to element ${id} after ${retries} retries`);
          } else if (id && retries < maxRetries) {
            retries++;
            console.log(`Retry ${retries} for element ${id}`);
            setTimeout(attemptScroll, retryDelay);
          } else if (retries >= maxRetries) {
            console.log(`Failed to find element ${id} after ${maxRetries} retries`);
          }
        } else if (pathname === '/privacy-policy' || pathname === '/terms' || pathname === '/claim') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      };

      // Defer initial scroll to ensure DOM is ready after route change
      setTimeout(attemptScroll, 100);
    };

    scrollToElement();
  }, [hash, pathname]);

  return null;
};

// Simple 404 fallback component
const NotFound = () => (
  <div className="text-center py-20">
    <h1 className="mt-[150px] text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4 mb-[90px] text-lg">Sorry, the page you're looking for doesn't exist.</p>
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
                <div id="home">
                  <Home />
                </div>
                <div id="logoslider">
                  <LogoSlider />
                </div>
                <div id="pricingtable">
                  <PricingTable />
                </div>
                <div id="howitworks">
                  <Howitworks />
                </div>
                <div id="about">
                  <About />
                </div>
                <div id="testimonials">
                  <Testimonials />
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
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/claim" element={<Claim />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/compare" element={<Compare />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SustainabilityIcon />
        <ScrollToTop /> 
        <div id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;