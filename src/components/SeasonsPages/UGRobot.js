import React from "react";
import "../../App.css";
import "./Robot.css";
import Footer from "../Footer";
import UGRobot1 from "../../images/robot/UGRobot1.jpg";
import UGRobot2 from "../../images/robot/UGRobot2.jpg";
import UGRobot3 from "../../images/robot/UGRobot3.png";
import UGRobot4 from "../../images/robot/UGRobot4.png";
import UGRobot5 from "../../images/robot/UGRobot5.png";

function UGRobot() {
  return (
    <>
      <h1 className="outreach">ULTIMATE GOAL ROBOT</h1>
      <div className="robotInfoWrapper">
        <p className="FFrobotdetails">
          While brainstorming, the team was able to come up with 3 overall
          design concepts. In figure (A), the intake mechanism is on the back
          end of the robot and will fold up and down whenever the mechanism
          would be needed. The material used to feed the rings would be either
          surgical tubing, rubber bands, zip ties, or rubber wheels. The idea of
          combining some of the materials was believed to be the best idea to
          make it more efficient. In Figure (B) the design aimed to keep the
          robot compact with an extendable launching mechanism. The concept in
          Figure (C) was basically like the one in figure (A), but without a
          foldable intake mechanism. The idea was to take out the front two
          motors of the drivetrain in order to fit the intake mechanism. The
          final system-level design of the robot consists of five main
          mechanisms: launching mechanism, wobble-goal arm, conveyor/gate
          mechanism, intake mechanism, and drivetrain. Figure (D) shows the
          isometric view of the robot while Figure (E) shows the side view. The
          robot is 18” long, 18” wide, and 16” high. It consists of 8 motors, a
          camera, and one color sensor. 2 motors used for the drivetrain, 2 used
          for the wobble-goal arm, 2 for the intake mechanism, 1 for the
          conveyor/gate mechanism, and 1 for the launching mechanism. The camera
          function was to detect the Starter Stack, while the color sensor
          senses specific lines on the field. There is an in-built gyro sensor
          in the control hub to keep the robot straight and consistent. All
          mechanisms work as one; the feeder at the back of the robot feeds the
          rings into the conveyor belt which then transfers the rings to the
          gate mechanism. From there, the rings are fed into the launching
          mechanism in a controlled manner using the gate mechanism.
        </p>
        <p className="robotPicTitle">Figure A, B, C</p>
        <div className="FFRobotImgList">
          <img
            src={UGRobot3}
            alt="SVG logo"
            className="UGRobotIMG"
            id="UGRobot1"
          />
          <img
            src={UGRobot1}
            alt="SVG logo"
            className="UGRobotIMG"
            id="UGRobot2"
          />
          <img
            src={UGRobot2}
            alt="SVG logo"
            className="UGRobotIMG"
            id="UGRobot3"
          />
        </div>
        <br />
        <p className="robotPicTitle">Figure D, E</p>
        <div className="FFRobotImgList">
          <img
            src={UGRobot4}
            alt="SVG logo"
            className="UGRobotIMG"
            id="UGRobot4"
          />
          <img
            src={UGRobot5}
            alt="SVG logo"
            className="UGRobotIMG"
            id="UGRobot5"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UGRobot;
