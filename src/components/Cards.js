import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>LEARN ABOUT OUR TEAM!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-3.jpg")}
              text="Take a Look at Our Past Seasons"
              label="Rover Ruckus - Freight Frenzy"
              path="/seasons"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Meet Our Team Members"
              label="History of Team Members"
              path="/teammembers"
            />
            <CardItem
              src={require("../images/img-2.jpg")}
              text="Our Outreach"
              label="2018 - 2022"
              path="/outreach"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../images/img-1.jpg")}
              text="PLACEMENT TEXT"
              label="PLACEMENT TEXT"
              path="/seasons"
            />
            <CardItem
              src={require("../images/img-3.jpg")}
              text="PLACEMENT TEXT"
              label="PLACEMENT TEXT"
              path="/teammembers"
            />
            <CardItem
              src={require("../images/survey.jpg")}
              text="Website Survey"
              label="Survey"
              path="/surveyform"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
