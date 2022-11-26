import React from "react";
import "./HowTo.css";
import Footer from "../Footer";

function HowTo() {
  return (
    <div>
      <div className="howToItems">
        <div className="howToWrapper">
          <h1 className="howToTitle">How-Tos</h1>
          <h2 className="howToSubHeader">
            Tutorials that show you HOW to do things!
          </h2>
          <br />
          <br />
          <br />
          <br />
          <div className="howToSection">
            <div className="howToFirstWrapper">
              <h2 className="howToFirst">How's How-Tos</h2>
              <br />
              <div className="howToLinkWrapper">
                <a href="/" className="howToLink">
                  n/a
                </a>
              </div>
              {/* <br /> */}
              {/* <div className="howToLinkWrapper">
                <a
                  href="https://www.firstinspires.org/robotics/ftc"
                  className="howToLink"
                >
                  abc
                </a>
              </div>
              <br />
              <div className="howToLinkWrapper">
                <a href="https://www.reddit.com/r/FTC/" className="howToLink">
                  abc
                </a>
              </div>
              <br />
              <div className="howToLinkWrapper">
                <a
                  href="https://discord.com/invite/first-tech-challenge"
                  className="howToLink"
                >
                  abc
                </a>
              </div> */}
            </div>

            <br />
            <br />

            <div className="howToHowWrapper">
              <h2 className="howToHow">Other How-Tos</h2>
              <br />
              <div className="howToLinkWrapper">
                <a
                  href="https://www.youtube.com/watch?v=JO7dqzJi8lw"
                  className="howToLink"
                >
                  FTC EasyOpenCV Tutorial + Skystone Example
                </a>
                <p className="howToDescription">
                  By: FTC Team Wolf Corp Robotics 12525
                </p>
              </div>
              <br />
              <div className="howToLinkWrapper">
                <a
                  href="https://www.youtube.com/watch?v=TRyI8FNifdA"
                  className="howToLink"
                >
                  Driving Linear Slides Using Extgension and Retraction Cable
                  (Viper Slides)
                </a>
                <p className="howToDescription">By: goBUILDA</p>
              </div>
              <br />
              <div className="howToLinkWrapper">
                <a
                  href="https://www.youtube.com/watch?v=D6aiIB2tMBA"
                  className="howToLink"
                >
                  How to use GitHub for Version Control for FTC
                </a>
                <p className="howToDescription">By: Team Wizards.exe 9794</p>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HowTo;
