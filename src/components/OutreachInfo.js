import React from "react";
import "./OutreachInfo.css";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
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
            <h2 className="articleTitle">
              <Link to="/FFEngineeringDay" className="FFoutreachLinks">
                Riverfront Museum Engineering Day
              </Link>
            </h2>
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
            <h2 className="articleTitle">
              <Link to="/RobotMall" className="FFoutreachLinks">
                Robot Demonstration at the mall
              </Link>
            </h2>
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
              <Link to="/TeamPractice" className="FFoutreachLinks">
                Hosting a Practice With Another Team
              </Link>
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
              <Link to="/ProjectLeadWay" className="FFoutreachLinks">
                Project lead the way-Dunlap & STEM class-DU Highschool
              </Link>
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
              <Link to="/MiniScrimmage" className="FFoutreachLinks">
                Hosting a local FTC Mini-Scrimmage before State Finals
              </Link>
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
              <Link to="/FogFreeGoggles" className="FFoutreachLinks">
                Providing Fog-Free Safety Glasses to Local Teams
              </Link>
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
              <Link to="/FLLState" className="FFoutreachLinks">
                FLL State Championship Volunteering
              </Link>
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
              <Link to="/RonaldHouse" className="UGoutreachLinks">
                Co-sponsoring a Cook-in for Ronald McDonalds House
                Patients/Families
              </Link>
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
              <Link to="/CoffeeHouse" className="UGoutreachLinks">
                Robotic Coffee House and Fundraiser
              </Link>
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
            <h2 className="articleTitleUG">
              <Link to="/UGWorkshop" className="UGoutreachLinks">
                Virtual 2020 FTC Workshop
              </Link>
            </h2>
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
