import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import "../HeroSection/HeroSection.css";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade === "fade-out") {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 1500);

    return () => clearInterval(timeout);
  }, [fadeProp]);

  return (
    <>
      <h1 className={fadeProp.fade}>{text}</h1>
    </>
  );
};

Fader.defaultProps = {
  text: "THIS IS HOW",
};

Fader.propTypes = {
  text: PropTypes.string,
};

export default Fader;
