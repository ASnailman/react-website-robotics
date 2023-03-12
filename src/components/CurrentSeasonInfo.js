import React from "react";
import "./CurrentSeasonInfo.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import powerPlay from "../images/powerPlay.png";

function CurrentSeasonInfo() {
  return (
    <div class="NScontainer">
      <div id="content5">
        <h2 className="NSseasonInfoH2" id="NS">
          POWER PLAY
          <img src={powerPlay} alt="SVG logo" className="PPLogo" />
        </h2>
        <div className="NS-container">
          <div className="NSsubContentLeft" id="NSpicture">
            <img
              src={require("../images/robot/howRobotSprint6.jpg")}
              alt="SVG logo"
              className="NSRobot"
            />
          </div>
          <Button
            className="NSsubContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
            to="/FFRobot"
          >
            <Link to="/PPRobot" className="NSLinks">
              ROBOT
            </Link>
          </Button>

          <div className="NSsubContentLeft" id="NSpicture">
            <img
              src={require("../images/temporaryPPTeamMembers.png")}
              alt="SVG logo"
              className="NSTeam"
            />
          </div>
          <Button
            className="NSsubContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/teammembers" className="NSLinks">
              TEAM MEMBERS
            </Link>
          </Button>

          <div className="NSsubContentLeft" id="NSpicture">
            <img
              src={require("../images/howLogo.jpg")}
              alt="SVG logo"
              className="NSAwards"
            />
          </div>
          <Button
            className="NSsubContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="" className="NSLinks">
              AWARDS (No Page)
            </Link>
          </Button>

          <div className="NSsubContentLeft" id="NSpicture">
            <img
              src={require("../images/outreachPhotos/catFamDay.jpg")}
              alt="SVG logo"
              className="NSOutreach"
            />
          </div>
          <Button
            className="NSsubContentRight"
            buttonStyle="btn--seasons"
            buttonSize="btn--seasonsPage"
          >
            <Link to="/outreach" className="NSLinks">
              OUTREACH
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CurrentSeasonInfo;
