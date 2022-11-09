import React from "react";
// import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { SiFirebase } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Send an email at how14469@gmail.com for Questions, Suggestions, or
          Offers!
        </p>
        <p className="footer-subscription-text">Click below to send an email</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="currentSeason">Current Season</h2>
            <Link to="/">Robot</Link>
            <Link to="/teammembers">Team Members</Link>
            <Link to="/outreach">Current Outreach</Link>
            <Link to="/UpcomingEvents">Upcoming Events</Link>
          </div>
          <div className="footer-link-items">
            <h2 className="contact-us">Contact Us</h2>
            <a href="mailto:how14469@gmail.com">Email</a>
            <Link to="/surveyform">Survey</Link>
            {/* <Link to="/">PLACEMENT TEXT</Link>
            <Link to="/">PLACEMENT TEXT</Link> */}
          </div>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="resourceFooter">Resources</h2>
            <Link to="/HowTo">How-To</Link>
            <Link to="/UsefulLinks">Useful Links</Link>
            <Link to="/Tools">Tools</Link>
            {/* <Link to="/Clips">Clips</Link> */}
            <Link to="/DocSpecs">Part Specs</Link>
          </div>
          <div className="footer-link-items">
            <h2 className="social-media">Social Media</h2>
            <a
              href="https://www.instagram.com/how14469/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/channel/UCe_ib1pvikITvvEfNncL6dA"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://twitter.com/HowRobotics"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://discord.gg/CUBQ96Hp8a"
              target="_blank"
              rel="noreferrer"
            >
              FTC Discord
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              HOW
              <i class="fa-solid fa-hashtag" />
              <i className="fa-solid fa-1" />
              <i className="fa-solid fa-4" />
              <i className="fa-solid fa-4" />
              <i className="fa-solid fa-6" />
              <i className="fa-solid fa-9" />
            </Link>
          </div>
          <div className="copyright">
            <p className="top">
              <small className="website-rights-copyright">Copyright</small>
              <i className="fa-solid fa-copyright" id="copyright"></i>
              <small className="website-rights-copyright">2022 HOW 14469</small>
            </p>
            <p className="bottom">
              <small className="website-rights-created">Created with</small>
              <i className="fa-brands fa-react"></i>
              <SiFirebase className="si-firebase" />
              <SiThreedotjs className="si-threejs" />
              <small className="website-rights-created">by Harris Khoo</small>
            </p>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link-instagram"
              href="https://www.instagram.com/how14469/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link-youtube"
              href="https://www.youtube.com/channel/UCe_ib1pvikITvvEfNncL6dA"
              target="_blank"
              rel="noreferrer"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="social-icon-link-twitter"
              href="https://twitter.com/HowRobotics"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon-link-discord"
              href="https://discord.gg/CUBQ96Hp8a"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
