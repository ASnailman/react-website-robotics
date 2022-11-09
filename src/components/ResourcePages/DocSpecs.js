import React from "react";
import "./DocSpecs.css";
import Footer from "../Footer";

function DocSpecs() {
  return (
    <div>
      <div className="specsItems">
        <div className="specsWrapper">
          <h1 className="specsTitle">Part Specs</h1>
          <h2 className="specsSubHeader">
            Links Taken From The{" "}
            <a href="https://www.revrobotics.com/" id="revWebsite">
              REV Robotics
            </a>{" "}
            &{" "}
            <a href="https://www.gobilda.com/" id="gobWebsite">
              goBILDA
            </a>{" "}
            Websites
          </h2>
          <hr className="hr2" />
          <br />
          <br />
          <br />
          <br />
          <div className="specsSection">
            <div id="revMotors">
              <h2 className="revgob">REV Motors</h2>
              {/* <br /> */}
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/REV-41-1211/"
                  className="specsLink"
                >
                  HD Hex Motor 20:1 Planetary Gearbox
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-41-1600/"
                  className="specsLink"
                >
                  UltraPlanetary Gearbox Kit & HD Hex Motor
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-41-1300/"
                  className="specsLink"
                >
                  Core Hex Motor
                </a>
              </div>
            </div>

            <div id="revSensors">
              <h2 className="revgob">REV Sensors</h2>
              {/* <br /> */}
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-31-1557/"
                  className="specsLink"
                >
                  Color Sensor V3
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-11-1105/"
                  className="specsLink"
                >
                  Blinkin LED Driver
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-31-1505/"
                  className="specsLink"
                >
                  2m Distance Sensor
                </a>
              </div>
            </div>

            <div id="gobMotors">
              <h2 className="revgob">Gobilda Motors</h2>
              {/* <br /> */}
              <div className="specsLinkWrapper">
                <a href="https://www.gobilda.com/motors/" className="specsLink">
                  Assorted Motors
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.gobilda.com/standard-size-servos/"
                  className="specsLink"
                >
                  Assorted Servos
                </a>
              </div>
            </div>

            <div id="devCon">
              <h2 className="revgob">Devices/Controllers</h2>
              {/* <br /> */}
              <div className="specsLinkWrapper">
                <a
                  href="https://www.gobilda.com/servo-programmer-for-2000-series-dual-mode-servo/"
                  className="specsLink"
                >
                  Servo Programmer for 2000 Series Dual Mode Servo
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-31-1595/"
                  className="specsLink"
                >
                  Control Hub
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-31-1596/"
                  className="specsLink"
                >
                  Driver Hub
                </a>
              </div>
              <div className="specsLinkWrapper">
                <a
                  href="https://www.revrobotics.com/rev-31-1153/"
                  className="specsLink"
                >
                  Expansion Hub
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

export default DocSpecs;
