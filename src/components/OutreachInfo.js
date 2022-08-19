import React from "react";
import "./OutreachInfo.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import freightFrenzyLogo3 from "../images/freightFrenzyLogo3.png";
import ultimateGoalLogo from "../images/ultimateGoalLogo.png";

function OutreachInfo() {
  return (
    <div class="OutreachContainer">
      <div id="FFcontent">
        <h2 className="seasonInfoH2" id="FF">
          FREIGHT FRENZY
          <img src={freightFrenzyLogo3} alt="SVG logo" className="FFLogo" />
        </h2>
        <div className="articlesContainer">
          <div className="articlePicture" id="pic">
            <img
              src={require("../images/outreachPhotos/engineeringDay.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">Riverfront Museum Engineering Day</h2>
            <p className="articleDescription">
              Co-hosted Engineering Day at Peoria Riverfront Museum with
              Caterpillar
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/recruitTeam.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              <Link to="/FFWorkshop" className="FFoutreachLinks">
                2021 FTC Workshop
              </Link>
            </h2>
            <p className="articleDescription">
              Fifty+ students attended to collectively learn/develop skills in
              Java/Mechanical Design/etc
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/robotMallDemonstration.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">Robot Demonstration at the mall</h2>
            <p className="articleDescription">
              Exhibited previous season's robot / explained capabilities of FTC
              robots to attendees / entertained audience
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/trailblazersTeamPractice.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              Hosting a Practice With Another Team
            </h2>
            <p className="articleDescription">
              Held practice and collaboration meeting with TrailBlazers 16244 in
              preparation for regional qualifier
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/robotDuShowcase.jpg")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
              id="mahee"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              Project lead the way-Dunlap & STEM class-DU Highschool
            </h2>
            <p className="articleDescription">
              Team members at both Dunlap / Daarul Uloom High Schools
              demonstrated robot at their engineering classes to promote
              FIRST/STEM
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/ftcMiniScrimmage.jpg")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              Hosting a local FTC Mini-Scrimmage before State Finals
            </h2>
            <p className="articleDescription">
              Hosted mini-scrimmage for teams advancing to state championship in
              our region
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/fogFreeSafetyGoggles.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              Providing Fog-Free Safety Glasses to Local Teams
            </h2>
            <p className="articleDescription">
              Masks caused goggles to fog, so we partnered with Caterpillar to
              provide 300 pairs of UVEX fog-free goggles to teams
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/mentorFLLTeams.png")}
              alt="SVG logo"
              className="articleCoverPicturesFF"
            />
          </div>
          <div className="article">
            <h2 className="articleTitle">
              FLL State Championship Volunteering
            </h2>
            <p className="articleDescription">
              Team Members volunteered at FLL Tesla State Championship in
              Champaign, IL
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>
        </div>
      </div>

      <div id="UGcontent">
        <h2 className="seasonInfoH2" id="UG">
          <img src={ultimateGoalLogo} alt="SVG logo" className="UGLogo" />
          ULTIMATE GOAL
        </h2>
        <div className="articlesContainer">
          <div className="articlePicture" id="pic">
            <img
              src={require("../images/outreachPhotos/ronaldMcDonald.jpg")}
              alt="SVG logo"
              className="articleCoverPicturesUG"
            />
          </div>
          <div className="article">
            <h2 className="articleTitleUG" id="ronaldTitle">
              Co-sponsoring a Cook-in for Ronald McDonalds House
              Patients/Families
            </h2>
            <p className="articleDescription">
              Collaborated with an FLL team to cook at Peoria Ronald McDonald’s
              house for patients/families while promoting FIRST
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/coffeeHouse.png")}
              alt="SVG logo"
              className="articleCoverPicturesUG"
            />
          </div>
          <div className="article">
            <h2 className="articleTitleUG">
              Robotic Coffee House and Fundraiser
            </h2>
            <p className="articleDescription">
              Hosted a coffee house to fundraise while promoting FIRST and
              entertaining an audience with skits and robotic demonstrations
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>

          <div className="articlePicture">
            <img
              src={require("../images/outreachPhotos/virtualTraining.png")}
              alt="SVG logo"
              className="articleCoverPicturesUG"
            />
          </div>
          <div className="article">
            <h2 className="articleTitleUG">Virtual 2020 FTC Workshop </h2>
            <p className="articleDescription">
              Hosted virtual training workshop with Manual Academy RoboRams to
              teach programming, hardware, etc
            </p>
            <p className="credentials">By: Harris | 8/8/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutreachInfo;
