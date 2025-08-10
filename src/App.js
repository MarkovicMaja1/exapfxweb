import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import Contact from './components/Contact.jsx';
import Discord from "./components/Discord";
import Testimonials from "./components/Testimonials";
import Cookies from "./components/Cookies.jsx";
import Cookie from "./components/Cookie.jsx";
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
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = () => {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Save scroll position when leaving "/"
    if (prevPathname.current === "/" && pathname !== "/") {
      sessionStorage.setItem("scrollPosition", window.scrollY);
      console.log(`Saved scroll position: ${window.scrollY}`);
    }

    prevPathname.current = pathname;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollToTarget = () => {
      let retries = 0;
      const maxRetries = 150;
      const retryDelay = 100;

      const tryScroll = () => {
        if (hash) {
          const id = hash.replace("#", "");
          const el = document.getElementById(id);
          if (el) {
            const offset = 125;
            const y = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: y, behavior: "smooth" });
            console.log(`Scrolled to #${id} after ${retries} retries`);
            return;
          }
        } else if (pathname === "/") {
          const saved = sessionStorage.getItem("scrollPosition");
          const homeEl = document.getElementById("home");
          if (saved && homeEl) {
            window.scrollTo({
              top: parseInt(saved, 10),
              behavior: "smooth",
            });
            console.log(`Restored scroll position to ${saved}`);
            return;
          }
        } else if (["/privacy-policy", "/terms", "/claim"].includes(pathname)) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        if (retries < maxRetries) {
          retries++;
          setTimeout(tryScroll, retryDelay);
        } else {
          console.warn("Scroll target not found after max retries");
        }
      };

      tryScroll();
    };

    // Delay slightly to allow layout/render completion
    setTimeout(scrollToTarget, 50);
  }, [pathname, hash]);

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
                <div id="testimonials">
                  <Testimonials />
                </div>
                <div id="howitworks">
                  <Howitworks />
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
                <div id="cookie">
                  <Cookie />
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