import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function RobotMall() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper" id="articleRobotMall">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Robot Showcase at the Mall
          </h1>
          <h2 className="articlePostSubHeader">
            "Public Showcase of our Past Robot"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo</p>
              <p id="separator">|</p>
              <p id="date">October 12, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/robotMallDemonstration.png")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            When we learned that meet 2 of Freight Frenzy was going to be hosted
            in the Northwoods Mall, we decided to take this opportunity to
            showcase our Ultimate Goal robot and answer questions to the public
            if they were interested. Our team competed during meet 2 of the
            Freight Frenzy season. The two teammates in charge of this were
            Afzal and Nubaid, as shown in the photo of them driving the robot
            around. We allowed people to drive our robot around. Our two
            teammates did a great job showcasing our robot to the public in the
            time they had.
          </p>
        </div>
        {/* <div className="rightspace"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default RobotMall;
