import React from "react";
import "../../App.css";
import "./About.css";

function About() {
  return (
    <>
      <h1 className="about">ABOUT</h1>
      <div className="aboutWrapper">
        <div id="infoID">
          <p className="aboutInfo">
            We are team HOW 14469 from Dunlap and Peoria Illinois. Our team
            formed in 2018, and we have had 5 seasons go by since then. We
            participated in the Rover Ruckus, Skystone, Ultimate Goal, Freight
            Frenzy, and Power Play seasons. Our goal is to learn about new
            things, meet new people, help others with our skills, work hard to
            accomplish our goals, and have fun. We hope to inspire as many
            people as we can throughout our journey.
          </p>
        </div>
        {/* <div id="picID" className="aboutPics">
          <img
            src={require("../../images/FFTeam.jpg")}
            alt="SVG logo"
            id="aboutFFTeamPic"
          />
          <img
            src={require("../../images/ultimategoalpartteam.jpg")}
            alt="SVG logo"
            id="aboutUGPartTeamPic"
          />
        </div> */}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default About;
