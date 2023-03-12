import React from "react";
import "../article.css";
import Footer from "../../Footer.js";
import { InstagramEmbed } from "react-social-media-embed";

function CatFamDay() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper" id="articleCatFamDay">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            Caterpillar Family Day
          </h1>
          <h2 className="articlePostSubHeader">
            "Inspiring kids with robotics"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Afzal</p>
              <p id="separator">|</p>
              <p id="date">December 24, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/catFamDay.jpg")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            {/* Engineering week is an incredible national holiday that we had the
            privilege of helping over 1000 people experience at The Riverfront
            Museum, where they host several STEM-related activities, including
            robotics. We collaborated with three other teams to hold exhibition
            matches, to allow the guests to drive the robots, and to answer any
            questions related to FIRST and STEM. (THIS IS FOR ENGINEERING WEEK)*/}
            Caterpillar invited our team to display the FIRST program to the
            families attending Caterpillar's Family Day, which resulted in us
            spreading STEM and FIRST to over 2000 guests. We had the opportunity
            to present our program and work to experienced engineerings, who
            were resoundingly impressed with how far we've come. In addition,
            Caterpillar invited us to a second event location downtown, where we
            displayed our training robots to over 1500 guests who stopped by.
            <br />
            <br />
            <div
              style={{ display: "flex", justifyContent: "left" }}
              className="instaEmbedCatFamDay"
            >
              <InstagramEmbed
                url="https://www.instagram.com/p/CjRE0eCrXY6/"
                width="100%"
                captioned
              />
            </div>
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

export default CatFamDay;
