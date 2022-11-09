import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function TrailblazersPractice() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper" id="articleTrailblazers">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Practice With The Trailblazers
          </h1>
          <h2 className="articlePostSubHeader">Robotics and Volleyball</h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo</p>
              <p id="separator">|</p>
              <p id="date">October 12, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/trailblazersTeamPractice.png")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            Prior to the regional competition, we decided to hold a practice
            with the Trailblazers in the chance that we are paired up together.
            In this meeting, we discussed strategy and helped each other solve
            potential issues that might arise during the competition. After
            discussing, we practiced how our autonomouses would work together.
            We also did timed teleop runs to decide roles for each other during
            the game. We made a lot of good progress, so we decided end off the
            meeting by fighting each other..... in a game of volleyball!
            <br />
            <br />
            <iframe
              src="https://drive.google.com/file/d/13GhH8u6zZbLUBKj3TS2kj9HT89fqcrW5/preview"
              width="640"
              height="480"
              allow="autoplay"
            ></iframe>
            <br />
            <br />
            We all had a lot of time playing some recreational volleyball. We
            swapped up the teams to make it more exciting as well. Overall, the
            meeting was a success. We created a solid strategy and had a lot of
            fun while doing it.
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

export default TrailblazersPractice;
