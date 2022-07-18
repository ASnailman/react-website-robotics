import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/HOWanimation4.mp4" autoPlay loop muted /> */}
      <h1>THIS IS HOW</h1>
      <p>HOW is this?</p>
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
