import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleCLick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HOW
            <i class="fa-solid fa-hashtag" />
            <i className="fa-solid fa-1" />
            <i className="fa-solid fa-4" />
            <i className="fa-solid fa-4" />
            <i className="fa-solid fa-6" />
            <i className="fa-solid fa-9" />
          </Link>
          <div className="menu-icon" onClick={handleCLick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/seasons"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Seasons
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/teammembers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Team Members
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/outreach"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Outreach
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--about" buttonSize="btn--medium">
              ABOUT
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
