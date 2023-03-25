import { useState } from "react";
import "./main.scss";
function Header() {
  const [mobileView, setMobileView] = useState(false);

  function handleMobile() {
    setMobileView(true);
  }

  function handleClose() {
    setMobileView(false);
  }

  function handleNav() {
    setMobileView(!mobileView);
  }

  return (
    <div className="header">
      <div className="header__wrapper">
        <h1 className="header-logo">P.</h1>

        <div className={`nav ${mobileView && `open-nav`}`}>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Expertises</a>
            </li>
            <li>
              <a href="#">Featured Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
  );
}

export default Header;
