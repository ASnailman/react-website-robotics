import React from "react";
import "../article.css";
import Footer from "../../Footer.js";
import Youtube from "../../Youtube";
import { InstagramEmbed } from "react-social-media-embed";

function PowerPlayKickoff() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper" id="articlePPKickoff">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            PowerPlay Season Kickoff
          </h1>
          <h2 className="articlePostSubHeader">"Exciting Beginning"</h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris</p>
              <p id="separator">|</p>
              <p id="date">December 24, 2022</p>
            </span>
          </div>
          <img
            src={require("../../../images/outreachPhotos/ppKickoff.jpg")}
            alt="SVG logo"
            className="articlePostImageMall"
          />
          <p className="articlePostDescription">
            On September 10th, 2022, the Power Play season kickoff was hosted in
            the Caterpillar Visitor Center/Riverfront Museum in Peoria,
            Illinois. The teams showed up with great excitement, wondering what
            the challenge of this season will be. They sat in an auditorium with
            many other teams to watch the season kickoff video, which was
            exciting as per usual. The season looked quite interesting, and many
            teams could not help but start discussing over the many
            possibilities and strategies. Before seeing the field in person, the
            team hosting the event, Manual Robotics Rams, passed out gifts to
            all the teams. It was also announced that there were two new rookie
            teams joining us in our region. One of these two teams received a
            robot building kit from GoBilda. When the teams arrived at the
            field, they were initially shocked at how the junctions were layed
            out. The task of placing cones on junctions was quite simple, but
            the loading of cones on the differently sized junctions repeatedly
            seemed like an arduous mission. Despite this, it was exciting for
            these teams to think about the possibile strategies they should use
            and the different types of mechanical designs to implement on their
            robots. Teams there discussed with other teams about this upcoming
            season. Overall, it was a great start to the season, and they will
            all be looking forward to the challenges ahead.
            <br />
            <br />
            <div>
              <iframe
                width="615"
                height="346"
                src="https://www.youtube.com/embed/oCXPP5xoP00"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                className="PPKickOffArticleYT"
              ></iframe>
            </div>
            <br />
            <br />
            <div
              style={{ display: "flex", justifyContent: "left" }}
              className="instaEmbedCatFamDay"
            >
              <InstagramEmbed
                url="https://www.instagram.com/p/CiWXCM-ukSp/"
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

export default PowerPlayKickoff;
