import React from "react";
import "../../App.css";
import "./Robot.css";
import Model from "./Model";
import Footer from "../Footer";
import FFRobot1 from "../../images/robot/FFRobot1.png";
import FFRobot2 from "../../images/robot/FFRobot2.png";
import FFRobot3 from "../../images/robot/FFRobot3.png";
import FFRobot4 from "../../images/robot/FFRobot4.png";
import FFRobot5 from "../../images/robot/FFRobot5.png";

function FFRobot() {
  return (
    <>
      <h1 className="outreach">FREIGHT FRENZY ROBOT</h1>
      <div className="FFmodel">
        <Model />
        <p className="afzalModel">Model by Mohammed Afzal Khan</p>
      </div>

      <div className="robotInfoWrapper">
        <p className="FFrobotdetails">
          When we started, the team set a few design requirements. These
          included aspects pertaining to the ability of our robot to do most of
          the tasks in the current season’s mission. These included requirements
          such as the ability to go around as well as over the barrier, being
          able to intake both the cargo and box, and the ability to sideload. To
          do this, we had to make the robot chassis the correct size, the intake
          universal, and the delivery system properly designed . The main point
          to remember when it comes to establishing mechanical designs is to
          understand how all functions work, and what the pros and cons are.
          Therefore, knowing what helps to overcome these flaws in the design,
          along with using the design to its full potential. Our final robot was
          somewhat of a hybrid between what is pictured in Figure (A) and (B).
          Our final system level design consisted of five main sub-systems,
          these are; the drivetrain, intake mechanism, the delivery mechanism,
          the carousel mechanism and the electrical system. Figure (C) is a side
          view of the main chassis of our robot while Figure (D) is an isometric
          view of the chassis, an edited GoBILDA Straffer Chassis. Our finished
          robot is 17.5 inches long, 17.5 inches tall, and 13.5 inches wide. It
          includes 8 motors, two cameras, one color sensor, and four servos.
          Four motors are used to power the drive wheels, three are used for the
          delivery mechanism, and one for the intake mechanism. Two cameras are
          installed on the sides of the robot facing outwards with specially
          designed camera holders. There is one color sensor in the bucket with
          the purpose of identifying the kind of freight that is inside the
          bucket. Two servos are used for the bucket gates, and the other two
          are used for the two carousel wheels. All of these systems together
          allow our robot to consistently complete all the required missions.
          The intake pushes freight into the delivery mechanism that delivers
          the freight into its respective hub. All of the different systems work
          together to provide an easier experience for the driver, and a more
          efficient robot.
        </p>
        <p className="robotPicTitle">Figure A, B, C</p>
        <div className="FFRobotImgList">
          <img src={FFRobot1} alt="SVG logo" className="FFRobotIMG" />
          <img src={FFRobot2} alt="SVG logo" className="FFRobotIMG" />
          <img src={FFRobot3} alt="SVG logo" className="FFRobotIMG" />
        </div>
        <br />
        <p className="robotPicTitle">Figure D, E</p>
        <div className="FFRobotImgList">
          <img src={FFRobot4} alt="SVG logo" className="FFRobotIMG" />
          <img src={FFRobot5} alt="SVG logo" className="FFRobotIMG" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default FFRobot;
