import CardItem from "../CardItem/CardItem";
import "./Cards.css";
//This is a comment
//This is another comment
function Cards() {
  return (
    <div className="cards">
      <h1 className="learn">LEARN ABOUT OUR TEAM!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={require("../../images/logos/past.png")}
              text="Take a Look at Our Past Seasons"
              label="Rover Ruckus - Freight Frenzy"
              path="/seasons"
            />
            <CardItem
              src={require("../../images/logos/newSeason.png")}
              text="Power Play Season 2022-2023"
              label="Current Season - Power Play"
              path="/currentseason"
            />
            <CardItem
              src={require("../../images/logos/team2.png")}
              text="Meet Our Team Members"
              label="History of Team Members"
              path="/teammembers"
              id="teamMembers"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={require("../../images/logos/about.png")}
              text="Resources"
              label="How-Tos/Links/Tools/Docs"
              path="/Resources"
              id="resources"
            />
            <CardItem
              src={require("../../images/logos/aboutUs.png")}
              text="About Us"
              label="Learn About Our Team!"
              path="/about"
            />
            <CardItem
              src={require("../../images/logos/survey.png")}
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
