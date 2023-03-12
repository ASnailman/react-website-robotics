import React from "react";
import "../article.css";
import Footer from "../../Footer.js";

function PreScrim() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            PowerPlay Pre-meet 1 Scrimmage
          </h1>
          <h2 className="articlePostSubHeader">
            "Meeting new teams and testing new robots"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Afzal</p>
              <p id="separator">|</p>
              <p id="date">December 24, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/preMeetPP.jpg")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            To better ourselves and the other teams in our area, we decided to
            host a local scrimmage two weeks before the first meet. This plan
            resulted in the attendance of 8 local teams, all of which
            participated in officiated matches to help simulate what it would be
            like going into meet one. In addition, we set up support booths
            throughout the venue, allowing teams to ask for assistance or
            general questions that they needed help with. However, the most
            impactful part of the event was how we provided strategic and
            technical advice to help a rookie team take their first steps into
            the world of FTC. Overall, the event was a resounding success,
            leading to a heightened meet one experience that we may not have
            achieved otherwise.
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

export default PreScrim;
