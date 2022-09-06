import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import LogoAnimation from "../videos/UpdatedLogoAnimation.gif";
import Fader from "./Fader.js";

function HeroSection() {
  return (
    <div className="hero-container">
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
          TEAM INFO
        </Button>
        <Button
          className="btns--team-trailer"
          buttonStyle="btn--teamtrailer"
          buttonSize="btn--large"
        >
          TEAM TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
