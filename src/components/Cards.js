import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1 className="learn">LEARN ABOUT OUR TEAM!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/past.png")}
              text="Take a Look at Our Past Seasons"
              label="Rover Ruckus - Freight Frenzy"
              path="/seasons"
            />
            <CardItem
              src={require("../images/team2.png")}
              text="Meet Our Team Members"
              label="History of Team Members"
              path="/teammembers"
              id="teamMembers"
            />
            <CardItem
              src={require("../images/outreach.png")}
              text="Our Current Outreach"
              label="2018 - 2022"
              path="/outreach"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/about.png")}
              text="Resources"
              label="How-Tos/Links/Tools/Docs"
              path="/Resources"
              id="resources"
            />
            <CardItem
              src={require("../images/aboutUs.png")}
              text="About Us"
              label="Learn About Our Team!"
              path="/about"
            />
            <CardItem
              src={require("../images/survey.png")}
              text="Website Survey"
              label="Survey"
              path="/surveyform"
              id="surveyForm"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
