import React from "react";
import "./NewOutreachInfo.css";
import { Link } from "react-router-dom";
// import { Button } from "./Button";

function NewOutreachInfo() {
  return (
    <div class="NewOutreachContainer">
      <div id="NEWcontent">
        <h2 className="NewseasonInfoH2" id="NEW">
          NEW SEASON
          {/* <img src={freightFrenzyLogo3} alt="SVG logo" className="FFLogo" /> */}
        </h2>
        <div className="NEWarticlesContainer">
          <div className="NEWarticlePicture" id="pic">
            <img
              src={require("../images/outreachPhotos/CaterpillarEvent.jpg")}
              alt="SVG logo"
              className="NEWarticleCoverPictures"
            />
          </div>
          <div className="NEWarticle">
            <h2 className="NEWarticleTitle">
              <Link to="/StemCamp" className="newOutreachLinks">
                4G Stem Camp
              </Link>
            </h2>
            <p className="NEWarticleDescription">
              Our teammate, Manar, teaches middle school girls
              engineering-related topics at Caterpillar
            </p>
            <p className="NEWcredentials">By: Harris | 8/14/22</p>
          </div>

          <div className="NEWarticlePicture">
            <img
              src={require("../images/outreachPhotos/impactPeoria.png")}
              alt="SVG logo"
              className="NEWarticleCoverPictures"
            />
          </div>
          <div className="NEWarticle">
            <h2 className="NEWarticleTitle">
              <Link to="/IgniteAndWorkshop" className="newOutreachLinks">
                2022 FTC Workshop & Ignite Peoria Event
              </Link>
            </h2>
            <p className="NEWarticleDescription">
              Hosted an FTC workshop at the Peoria Civic Center and demonstrated
              robots at Ignite Peoria 2022
            </p>
            <p className="NEWcredentials">By: Harris | 8/14/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOutreachInfo;
