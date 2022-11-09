import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "../App.css";
import LogoAnimation from "../videos/UpdatedLogoAnimation.gif";
import Fader from "./Fader.js";

function HeroSection() {
  return (
    <div className="hero-parentContainer">
      <div className="hero-container" id="heroLeftContainer">
        {/* <video src="/videos/HOWanimation4.mp4" autoPlay loop muted /> */}
        {/* <h1>THIS IS HOW</h1> */}

        <div>
          <Fader text="THIS IS HOW"></Fader>
        </div>
        <img src={LogoAnimation} alt="my-gif" id="logoanimation" />
        <div className="hero-btns">
          <Button
            className="btns--team-info"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <Link to="/about" id="aboutLink">
              TEAM INFO
            </Link>
          </Button>
          <Button
            className="btns--team-trailer"
            buttonStyle="btn--teamtrailer"
            buttonSize="btn--large"
          >
            <a
              href="https://www.youtube.com/channel/UCe_ib1pvikITvvEfNncL6dA/featured"
              className="trailerLink"
            >
              TEAM TRAILER
            </a>
            <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
      <div className="heroAnnouncements" id="heroRightContainer">
        <h1 id="heroRightTitle">Announcements</h1>
        <li id="heroAnnouncementsList">
          <a
            href="https://www.youtube.com/watch?v=uQsjA-X3RSc"
            id="heroVideoLink"
          >
            Sprint 3
          </a>{" "}
          Video is now up on Youtube and on the{" "}
          <Link to="/" id="heroPageLink">
            robot section
          </Link>{" "}
          of PowerPlay!
        </li>
        <li id="heroAnnouncementsList">
          PowerPlay <span id="spanMeet1">Meet 1</span> upcoming on November 5!
        </li>
        <li id="heroAnnouncementsList">
          <a
            href="https://www.youtube.com/watch?v=SCsUMMBjNeA"
            id="heroVideoLink"
          >
            Sprint 2
          </a>{" "}
          Video is now up on Youtube and on the{" "}
          <Link to="/" id="heroPageLink">
            robot section
          </Link>{" "}
          of PowerPlay!
        </li>
        <li id="heroAnnouncementsList">
          <a
            href="https://www.youtube.com/watch?v=1ARENS3RvGk&t=2s"
            id="heroVideoLink"
          >
            Sprint 1
          </a>{" "}
          Video is now up on Youtube and on the{" "}
          <Link to="/" id="heroPageLink">
            robot section
          </Link>{" "}
          of PowerPlay!
        </li>
        {/* <li id="heroAnnouncementsList">fsdfsdfsfds</li>
        <li id="heroAnnouncementsList">fsdfsdfsfds</li>
        <li id="heroAnnouncementsList">fsdfsdfsfds</li> */}
      </div>
    </div>
  );
}

export default HeroSection;
