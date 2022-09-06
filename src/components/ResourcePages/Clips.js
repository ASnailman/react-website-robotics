import React from "react";
import "./Clips.css";
import Youtube from "../Youtube";
import Footer from "../Footer";

function Clips() {
  return (
    <div className="clipsContainer">
      <div className="clipsItems">
        <div className="clipsWrapper">
          <div id="StateChamp">
            <div className="summaryWrapper">
              <h1 className="titleYT">
                2022 Freight Frenzy State Championship Clips
              </h1>
              <p className="descriptionYT">
                Link to the full state championship matches &nbsp;
                <a href="https://youtu.be/Z9AYxmcgvJY">HERE</a>
              </p>
            </div>
            <div className="clipsYT">
              <Youtube embedId="Z9AYxmcgvJY?clip=UgkxA_sRkLXX79m8b-7E101JIny22Yih6kEY&amp;clipt=EObxbRjGxnE" />
              <p className="clipTitle">Semifinal 1 Match 3</p>
              <Youtube embedId="Z9AYxmcgvJY?clip=UgkxAANqbGMazC7ahgnSmNPP8FxQm11qA_TD&amp;clipt=EOi7axi8_20" />
              <p className="clipTitle">SemiFinal 1 Match 3 cont.</p>
              <Youtube embedId="Z9AYxmcgvJY?clip=UgkxCD2zQyW2veeqJdgzu68if-8Vw_gpD3Cq&amp;clipt=EPTroQEY1MClAQ" />
              <p className="clipTitle">Finals Alliance Introductions</p>
              <Youtube embedId="Z9AYxmcgvJY?clip=UgkxO2Cmo6WtyhPmF8HlCVr0RRnDTZV-SUoQ&amp;clipt=EJGargEYqfKwAQ" />
              <p className="clipTitle">Finals Match 1</p>
            </div>
          </div>
          <div id="clips1"></div>
          <div id="clips2"></div>
          <div id="clips3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Clips;
