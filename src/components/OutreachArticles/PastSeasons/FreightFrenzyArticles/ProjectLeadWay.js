import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function ProjectLeadWay() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Project Lead the way
          </h1>
          <h2 className="articlePostSubHeader">
            "Showcasing Our Freight Frenzy robot to inpsire others"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Mahee Karim</p>
              <p id="separator">|</p>
              <p id="date">December 22, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/robotDuShowcase.jpg")}
            alt="SVG logo"
            className="articlePostImagePLTW"
          />
          <img
            src={require("../../../../images/outreachPhotos/robotDunlapShowcase.jpg")}
            alt="SVG logo"
            className="articlePostImagePLTW"
          />
          <p className="articlePostDescription">
            Two of our team members, Mahee and Adam, went to their respective
            schools in order to spread the word of FIRST and FTC. We took the
            robot, the previous years' videos, and the previous years'
            documentation so we could present it to our engineering classes.
            This was the first time we ever went to a school to teach people
            about FTC, and it was a very productive event. We taught many people
            about robotics and even inspired some students that would like to
            try robotics. This event was amazing and we hope to do it again next
            year.
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

export default ProjectLeadWay;
