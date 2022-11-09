import React from "react";
import "../../App.css";
import "./PastAwards.css";
import Footer from "../Footer";
import FinalistAlliance from "../../images/awards/FinalistAlliance.jpg";
import League2022 from "../../images/awards/League2022.jpg";
import Qual2021 from "../../images/awards/Qual2021.jpg";

function PastAwards() {
  return (
    <div>
      <h1 className="awards">PAST AWARDS</h1>
      <div className="awardsContainer">
        <div id="FFAwardsWrapper">
          <h1 className="awardFF">Freight Frenzy Awards</h1>
          <h2 className="awardTitle">
            2021-2022 Finalist Alliance | IL State Championships
          </h2>

          <img src={FinalistAlliance} alt="SVG logo" className="FFAwardsLogo" />
          <h2 className="awardTitle">
            2021-2022 Finalist Alliance | Peoria League Tournament
          </h2>

          <img src={League2022} alt="SVG logo" className="FFAwardsLogo" />
        </div>

        <div id="UGAwardsWrapper">
          <h1 className="awardUG">Ultimate Goal Awards</h1>
          <h2 className="awardTitle">
            2020-2021 5th Ranked Team | Qualifying Tournament
          </h2>

          <img src={Qual2021} alt="SVG logo" className="UGAwardsLogo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PastAwards;
