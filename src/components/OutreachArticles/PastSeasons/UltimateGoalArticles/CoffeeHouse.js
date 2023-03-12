import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function CoffeeHouse() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            FTC Coffee House
          </h1>
          <h2 className="articlePostSubHeader">"Robots, Coffee, and Fun"</h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo</p>
              <p id="separator">|</p>
              <p id="date">December 22, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../../images/outreachPhotos/coffeeHouse.png")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            This event was made to not only promote FIRST and FTC, but to also
            involve our community in a plethora of activities. We served coffee
            to those who attended and presented many different shows. This
            wasn't jsut an event for our team, though. Other people came and
            presented their own acts. There were poetry readings, comedy acts,
            and of course, a prsentation about FIRST and FTC. The event was a
            huge success. We raised a lot of money and entertained the people
            that attended.
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

export default CoffeeHouse;
