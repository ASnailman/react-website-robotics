import React from "react";
import "./SeasonsInfo.css";
import { Link } from "react-router-dom";
import freightFrenzyLogo3 from "../images/freightFrenzyLogo3.png";
import ultimateGoalLogo from "../images/ultimateGoalLogo.png";
import { Button } from "./Button";

function SeasonsInfo() {
  return (
    <div class="container">
      {/* <div id="content1">
        <h2 className="seasonInfoH2" id="RR">
          Rover Ruckus
        </h2>
        <div className="rover-container">
          <div className="subContentLeft" id="roverRobot">
            Robot
          </div>
          <div className="subContentRight" id="roverAwards">
            Awards
          </div>
        </div>
      </div>
      <div id="content2">
        <h2 className="seasonInfoH2" id="SKY">
          Skystone
        </h2>
        <div className="skystone-container">
          <div className="subContentLeft" id="skystoneRobot">
            Robot
          </div>
          <div className="subContentRight" id="skystoneAwards">
            Awards
          </div>
        </div>
      </div> */}

      <div id="content4">
        <h2 className="seasonInfoH2" id="FF">
          FREIGHT FRENZY
          <img src={freightFrenzyLogo3} alt="SVG logo" className="FFLogo" />
        </h2>
        <div className="freight-container">
          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFRobot.jpg")}
              alt="SVG logo"
              className="FFRobot"
            />
          </div>
          {/* <div className="subContentRight" id="freightRobot">
            <Link to="/FFRobot">Robot</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
            to="/FFRobot"
          >
            <Link to="/FFRobot" className="Links">
              ROBOT
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFTeam.jpg")}
              alt="SVG logo"
              className="FFTeam"
            />
          </div>
          {/* <div className="subContentRight" id="freightTeam">
            <Link to="/teammembers">Team Members</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/teammembers" className="Links">
              TEAM MEMBERS
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFAwards.png")}
              alt="SVG logo"
              className="FFAwards"
            />
          </div>
          {/* <div className="subContentRight" id="freightAwards">
            <Link to="/Awards">Awards</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/Awards" className="Links">
              AWARDS
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFOutreach.jpg")}
              alt="SVG logo"
              className="FFOutreach"
            />
          </div>
          {/* <div className="subContentRight" id="freightOutreach">
            <Link to="/outreach">Outreach</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/pastoutreach" className="Links">
              OUTREACH
            </Link>
          </Button>
        </div>
      </div>

      <div id="content3">
        <h2 className="seasonInfoH2" id="UG">
          <img src={ultimateGoalLogo} alt="SVG logo" className="UGLogo" />
          ULTIMATE GOAL
        </h2>
        <div className="ultimate-container">
          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/UGRobot.jpg")}
              alt="SVG logo"
              className="UGRobot"
            />
          </div>
          {/* <div className="subContentRight" id="ultimateRobot">
            <Link to="/UGRobot">Robot</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/UGRobot" className="Links">
              ROBOT
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFRobot.jpg")}
              alt="SVG logo"
              className="UGTeam"
            />
          </div>
          {/* <div className="subContentRight" id="ultimateTeam">
            <Link to="/teammembers">Team Members</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/teammembers" className="Links">
              TEAM MEMBERS
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/FFRobot.jpg")}
              alt="SVG logo"
              className="UGAwards"
            />
          </div>
          {/* <div className="subContentRight" id="ultimateAwards">
            <Link to="/Awards">Awards</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/Awards" className="Links">
              AWARDS
            </Link>
          </Button>

          <div className="subContentLeft" id="picture">
            <img
              src={require("../images/UGOutreach.jpg")}
              alt="SVG logo"
              className="UGOutreach"
            />
          </div>
          {/* <div className="subContentRight" id="ultimateOutreach">
            <Link to="/outreach">Outreach</Link>
          </div> */}
          <Button
            className="subContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/pastoutreach" className="Links">
              OUTREACH
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SeasonsInfo;
