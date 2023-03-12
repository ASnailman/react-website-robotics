import React from "react";
import "../article.css";
import Footer from "../../Footer.js";

function PreQualScrim() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        <div className="articleWrapper">
          <h1 id="aPT" className="articlePostTitle">
            Pre-Qualifier Mini Scrimmage
          </h1>
          <h2 className="articlePostSubHeader">
            "Practicing with teams before the regional competition"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Afzal Khan</p>
              <p id="separator">|</p>
              <p id="date">February 17, 2023</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/preQualMiniScrim.JPG")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            We held a pre-qualifier scrimmage two weeks before the competition
            to help get some teams from both conferences to interact before the
            event. This event allowed all the teams to get some much-needed
            practice and experiment with strategies in an environment similar to
            an actual competition.
            <br />
            <br />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PreQualScrim;
