import React from "react";
import "../article.css";
import Footer from "../../Footer.js";

function IgniteAndWorkshop() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            2022 FTC Workshop and Ignite Peoria Event
          </h1>
          <h2 className="articlePostSubHeader">
            "Showcasing robots and teaching to promote STEM and FIRST"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Afzal Khan</p>
              <p id="separator">|</p>
              <p id="date">February 17, 2023</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/impactPeoria.png")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            The Ignite Peoria event at The Peoria Civic Center was easily one of
            the most important events we participated in this year, allowing us
            to promote STEM and FIRST to over 1000 people. During the event, our
            manpower was split, manning the FIRST booth and instructing the
            preseason FTC workshop. We brought our robot from last year's
            challenge and simple demonstration robots that we created and,
            throughout the event, allowed the guests to operate the robots and
            manipulate game elements. The booth was manned by our experienced
            team members, who answered the guests' questions and guided them
            through the experience of FTC. In addition, while all this was going
            on, our team leads were hard at work assisting the learning at the
            FTC workshop. The workshop doubled as a way for our more experienced
            members to help out the community and as a much-needed experience
            for our newly onboarded members.
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

export default IgniteAndWorkshop;
