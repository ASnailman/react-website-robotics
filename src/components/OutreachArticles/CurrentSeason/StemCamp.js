import React from "react";
import "../article.css";
import Footer from "../../Footer.js";

function StemCamp() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            4G Stem Camp
          </h1>
          <h2 className="articlePostSubHeader">subtext</h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Manar Salem</p>
              <p id="separator">|</p>
              <p id="date">August --, 2022</p>
            </span>
          </div>
          <div className="articlePostImage">image</div>
          <p className="articlePostDescription">
            Lorem ipsum
            <br />
            <br />
            twitter post
            <br />
            <br />
            Lorem ipsum
            <br />
            <br />
            youtube video
            <br />
            <br />
            Lorem ipsum
          </p>
        </div>
        {/* <div className="rightspace"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default StemCamp;
