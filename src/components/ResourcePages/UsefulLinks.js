import React from "react";
import "./UsefulLinks.css";
import Footer from "../Footer";

function UsefulLinks() {
  return (
    <div>
      <div className="usefulItems">
        <div className="usefulWrapper">
          <h1 className="usefulTitle">FTC Resources</h1>
          <h2 className="usefulSubHeader">Links to help your team</h2>
          <br />
          <br />
          <br />
          <br />
          <div className="usefulSection">
            <div className="usefulFirstWrapper">
              <h2 className="usefulFirst">Official Resources</h2>
              <br />
              <div className="usefulLinkWrapper">
                <a href="https://www.firstinspires.org/" className="usefulLink">
                  FIRST Website
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a
                  href="https://www.firstinspires.org/robotics/ftc"
                  className="usefulLink"
                >
                  FIRST FTC Website
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a href="https://www.reddit.com/r/FTC/" className="usefulLink">
                  FTC Reddit Community
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a
                  href="https://discord.com/invite/first-tech-challenge"
                  className="usefulLink"
                >
                  Official FTC Discord Server
                </a>
              </div>
            </div>

            <br />
            <br />

            <div className="usefulHowWrapper">
              <h2 className="usefulHow">How's Resources</h2>
              <br />
              <div className="usefulLinkWrapper">
                <a href="https://discord.gg/CUBQ96Hp8a" className="usefulLink">
                  Our Local Discord Server
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a href="" className="usefulLink">
                  n/a
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a href="" className="usefulLink">
                  n/a
                </a>
              </div>
              <br />
              <div className="usefulLinkWrapper">
                <a href="" className="usefulLink">
                  n/a
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UsefulLinks;
