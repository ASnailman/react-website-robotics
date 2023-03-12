import React from "react";
import "../../App.css";
import "./PPRobot.css";
import Youtube from "../Youtube";
import Footer from "../Footer";

function PPRobot() {
  return (
    <>
      <h1 className="outreach">POWER PLAY ROBOT</h1>
      <div className="ppRobotInfoContainer">
        <div className="ppRobotItems">
          <div className="ppSummaryWrapper" id="summaryWrapID">
            <h1 className="sprintTitleYT">Sprints</h1>
            <p className="sprintDescriptionYT">
              Showcasing Our Robot Progress in Dedicated Sections
            </p>
          </div>
          <div className="ppRobotWrapper" id="ppRobotWrapID">
            <div id="Sprint1">
              <div className="sprintsYT">
                <Youtube embedId="1ARENS3RvGk" />
                <p className="sprintTitle">Sprint 1</p>
              </div>
            </div>
            <div id="Sprint2">
              <Youtube embedId="SCsUMMBjNeA" />
              <p className="sprintTitle">Sprint 2</p>
            </div>
            <div id="Sprint3">
              <Youtube embedId="uQsjA-X3RSc" />
              <p className="sprintTitle">Sprint 3</p>
            </div>
            <div id="Sprint4">
              <Youtube embedId="fLemsbU2_28" />
              <p className="sprintTitle">Sprint 4</p>
            </div>
            <div id="Sprint5_6">
              <Youtube embedId="bavAWZ-h7yU" />
              <p className="sprintTitle">Sprint 5 & 6</p>
            </div>
            <div id="Sprint7">
              <Youtube embedId="iBURIDolVEg" />
              <p className="sprintTitle">Sprint 7</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PPRobot;
