import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function FogFreeGoggles() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Providing Fog Free Safety Goggles To Local Teams
          </h1>
          <h2 className="articlePostSubHeader">
            "Providing teams with a tool that ensures safety"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo</p>
              <p id="separator">|</p>
              <p id="date">December 22, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/fogFreeSafetyGoggles.png")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            (Note: This was around the time of the Covid pandemic)
            <br />
            <br />
            When our team started to meet in person, we quickly identified a
            problem with wearing safety glasses and masks at the same time. As
            we breathed through the masks, the safety glasses fogged up quite
            often. This made it harder to see which was hazardous. To accomodate
            this problem, we partnered with Caterpillar Inc. to provide 300
            pairs of UVEX fog-free safety glasses to other teams with the same
            problem. This became a two-year effort to serve the local FTC
            community and provide them with proper tools to work on the robot
            safely.
            <br />
            <br />
          </p>
        </div>
        {/* <div className="rightspace"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default FogFreeGoggles;
