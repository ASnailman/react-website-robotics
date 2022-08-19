import { PropTypes } from "prop-types";
import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const Fader = ({ text }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-out",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      //   if (fadeProp.fade === "fade-in") {
      //     setFadeProp({
      //       fade: "fade-out",
      //     });
      //   } else if (fadeProp.fade === "fade-out") {
      //     setFadeProp({
      //       fade: "fade-in",
      //     });
      //   } else {
      //     setFadeProp({
      //       fade: "fade-none",
      //     });
      //   }

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
