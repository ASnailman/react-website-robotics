import React from "react";
import "./NewOutreachInfo.css";
import { Link } from "react-router-dom";
import powerPlay from "../images/powerPlay.png";

function NewOutreachInfo() {
  return (
    <div class="PPOutreachContainer">
      <div id="PPcontent">
        <h2 className="PPseasonInfoH2" id="PP">
          POWER PLAY
          <img src={powerPlay} alt="SVG logo" className="PPLogo" />
        </h2>
        <div className="PParticlesContainer">
          <div className="PParticlePicture" id="pic">
            <img
              src={require("../images/outreachPhotos/CaterpillarEvent.jpg")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/StemCamp" className="PPOutreachLinks">
                4G Stem Camp
              </Link>
            </h2>
            <p className="PParticleDescription">
              Our teammate, Manar, teaches middle school girls
              engineering-related topics at Caterpillar
            </p>
            <p className="PPcredentials">By: Harris | 8/14/22</p>
          </div>

          <div className="PParticlePicture">
            <img
              src={require("../images/outreachPhotos/impactPeoria.png")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/IgniteAndWorkshop" className="PPOutreachLinks">
                2022 FTC Workshop & Ignite Peoria Event
              </Link>
            </h2>
            <p className="PParticleDescription">
              Hosted an FTC workshop at the Peoria Civic Center and demonstrated
              robots at Ignite Peoria 2022
            </p>
            <p className="PPcredentials">By: Harris | 8/14/22</p>
          </div>

          <div className="PParticlePicture">
            <img
              src={require("../images/outreachPhotos/ppKickoff.jpg")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/PowerPlayKickoff" className="PPOutreachLinks">
                Power Play Season Kickoff
              </Link>
            </h2>
            <p className="PParticleDescription">
              Attended the 2022-2023 Power Play Season Kickoff
            </p>
            <p className="PPcredentials">By: Harris | 9/10/22</p>
          </div>

          <div className="PParticlePicture">
            <img
              src={require("../images/outreachPhotos/catFamDay.jpg")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/CaterpillarFamilyDay" className="PPOutreachLinks">
                Caterpillar Family Day
              </Link>
            </h2>
            <p className="PParticleDescription">
              Partnered with the Trailblazers to promote FIRST during the
              Caterpillar Family Day Event at the Tech Center in Peoria
            </p>
            <p className="PPcredentials">By: Harris | 10/25/22</p>
          </div>

          <div className="PParticlePicture">
            <img
              src={require("../images/outreachPhotos/preMeetPP.jpg")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/PreMeetScrimPP" className="PPOutreachLinks">
                PowerPlay Pre-Meet 1 Scrimmage
              </Link>
            </h2>
            <p className="PParticleDescription">
              Hosted the Pre-Meet 1 Scrimmage at IFP
            </p>
            <p className="PPcredentials">By: Harris | 10/25/22</p>
          </div>

          <div className="PParticlePicture">
            <img
              src={require("../images/outreachPhotos/FLLScrim2022.jpg")}
              alt="SVG logo"
              className="PParticleCoverPictures"
            />
          </div>
          <div className="PParticle">
            <h2 className="PParticleTitle">
              <Link to="/FLLScrim" className="PPOutreachLinks">
                FLL Scrimmage 2022
              </Link>
            </h2>
            <p className="PParticleDescription">
              Hosted the 2022 FLL Scrimmage at ICP
            </p>
            <p className="PPcredentials">By: Harris | 10/25/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOutreachInfo;
