import Hero from "../Components/Hero";
import { useState, useEffect } from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Expertise from "../Components/Expertise";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Works from "../Components/Works";
import "./global.scss";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Homepage() {
  const [mobileView, setMobileView] = useState(false);
  function handleNav() {
    setMobileView(!mobileView);
  }

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <h1 className="header-logo">P.</h1>

          <div className={`nav ${mobileView && `open-nav`}`}>
            <ul>
              <li>
                <a href="/" onClick={handleNav}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNav}>
                  About
                </a>
              </li>
              <li>
                <a href="#expertise" onClick={handleNav}>
                  Expertises
                </a>
              </li>
              <li>
                <a href="#" onClick={handleNav}>
                  Featured Works
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div onClick={handleNav} className={`menu ${mobileView && `open`}`}>
            <div className="btn"></div>
            <div className="btn"></div>
            <div className="btn"></div>
          </div>
        </div>
      </div>
      <Hero />
      <About />
      <Expertise />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
