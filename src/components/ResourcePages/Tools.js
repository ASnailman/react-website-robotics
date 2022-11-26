import React from "react";
import "./Tools.css";
import Footer from "../Footer";

function Tools() {
  return (
    <div>
      <div className="ToolsItems">
        <div className="ToolsWrapper">
          <h1 className="ToolsTitle">Tools</h1>
          <h2 className="ToolsSubHeader">
            Tools that might be useful for your team!
          </h2>
          <br />
          <br />
          <br />
          <br />
          <div className="ToolsSection">
            <div className="ToolsListWrapper">
              <h2 className="ToolsListTitle">List of Tools</h2>
              <div className="ToolsLinkWrapper">
                <a
                  href="https://github.com/OpenFTC/EasyOpenCV"
                  className="ToolsLink"
                  id="ToolLink1"
                >
                  EasyOpenCV
                </a>
                <p className="ToolDescription" id="ToolD1">
                  Easy Open CV is a simpler version of Open CV desgined to
                  detect colors. | Made by several contributors listed on the
                  GitHub Page.
                </p>
                <a
                  href="https://gm0.org/en/latest/index.html"
                  className="ToolsLink"
                  id="ToolLink2"
                >
                  gm0
                </a>
                <p className="ToolDescription" id="ToolD2">
                  gm0, or Game Manual, is a great resource for all FTC teams to
                  learn about various things including CAD, engineering skills,
                  design process and strategy, general advice, and etc.
                </p>
                <a
                  href="https://vrobotsim.com/"
                  className="ToolsLink"
                  id="ToolLink3"
                >
                  FTC Virtual Robot Simulator
                </a>
                <p className="ToolDescription" id="ToolD3">
                  This is a virtual robot simulator for FTC created by FIRST.
                  This simulator will allow you to test your robot without being
                  on the field. It is a versatile tool that will allow you to
                  make progress while being away from the real field.
                </p>
                <a href="n/a" className="ToolsLink" id="ToolLink4">
                  n/a
                </a>
                <p className="ToolDescription" id="ToolD4">
                  n/a
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tools;
