import { Link } from "react-router-dom";
import howAnimationGIF from "videos/howAnimationGIF.gif";
import "../../App.css";
import Announcements from "../Announcements/Announcements";
import { Button } from "../Button/Button";
import Fader from "../Fader/Fader";
import "../HeroSection/HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-parentContainer">
      {" "}
      <div className="hero-container" id="heroLeftContainer">
        <div>
          {" "}
          <Fader text="THIS IS HOW"></Fader>{" "}
        </div>{" "}
        <img src={howAnimationGIF} alt="my-gif" id="logoanimation" />{" "}
        <div className="hero-btns">
          {" "}
          <Button
            className="btns--team-info"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            {" "}
            <Link to="/about" id="aboutLink">
              {" "}
              TEAM INFO{" "}
            </Link>{" "}
          </Button>{" "}
          <Button
            className="btns--team-trailer"
            buttonStyle="btn--teamtrailer"
            buttonSize="btn--large"
          >
            {" "}
            <a
              href="https://www.youtube.com/channel/UCe_ib1pvikITvvEfNncL6dA/featured"
              className="trailerLink"
            >
              {" "}
              TEAM CHANNEL{" "}
            </a>{" "}
            <i className="far fa-play-circle" />{" "}
          </Button>{" "}
        </div>{" "}
      </div>{" "}
      <Announcements />
    </div>
  );
}
export default HeroSection;
