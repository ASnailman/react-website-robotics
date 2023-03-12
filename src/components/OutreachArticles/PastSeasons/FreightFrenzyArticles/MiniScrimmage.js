import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function MiniScrimmage() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Hosting an FTC Mini Scrimmage Before Finals
          </h1>
          <h2 className="articlePostSubHeader">
            "Showcasing coopertition with other teams"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo and Mahee Karim</p>
              <p id="separator">|</p>
              <p id="date">December 22, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/ftcMiniScrimmage.jpg")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            Our team hosted a mini scrimmage during the 2020-2021 Freight Frenzy
            season before the state championships. Four teams in our region that
            were attending the state championships participated, and this
            allowed us to talk about different strategies and test them out. We
            also practiced with many of these teams in case we were matched up
            during the upcoming competition. Overall, it was a lot of fun to
            have practice matcehs with the other teams. This was our first ever
            FTC scrimmage in the nearby area, and it was amazing. We are
            hopefully going to continue doing this in the future at a larger
            scale.
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

export default MiniScrimmage;
