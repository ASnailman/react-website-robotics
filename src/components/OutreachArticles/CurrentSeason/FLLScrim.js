import React from "react";
import "../article.css";
import Footer from "../../Footer.js";

function FLLScrim() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            FLL Scrimmage Hosted at ICP
          </h1>
          <h2 className="articlePostSubHeader">"Bringing FTC to FLL"</h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Afzal and Harris</p>
              <p id="separator">|</p>
              <p id="date">December 24, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/FLLScrim2022.jpg")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            We took part in hosting an FLL scrimmage, promoting FIRST and STEM
            to the 250-plus guests that attended the event. Our team aided in
            the event's success by selling concessions for fundraising,
            volunteering for different roles at the scrimmage, and driving two
            of our robots in the open for spectators and others to see. We
            talked to many people who were interested about FIRST, and we
            explained to them about our journey and what FIRST was all about.
            <br />
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FLLScrim;
