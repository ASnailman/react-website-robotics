import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./TeamSlider.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { seasons } from "../../data/seasons";

const NextArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowForwardIosIcon style={{ color: "white" }} />
  </div>
);

const PrevArrow = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowBackIosIcon style={{ color: "white" }} />
  </div>
);

export default function TeamSlider() {
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const amount = Math.min(window.scrollY / 40, 10);
      setBlur(amount);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: true,
    className: "team-slider",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    fade: false,
    swipeToSlide: true,
    centerMode: true,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),

    afterChange: function (index) {
      console.log(`Slider changed to: ${index + 1}`);
    },
  };

  return (
    <>
      <div className="heading">
        {seasons[0].name && (
          <img
            className="heading-image"
            src={seasons[0].photo}
            alt={`${seasons[0].name} team`}
            style={{
              filter: `blur(${blur}px)`,
              transform: `scale(${1 + blur * 0.005})`,
            }}
          />
        )}

        <h1 className="heading-text">TEAM MEMBERS</h1>
      </div>

      <div className="carousel">
        {seasons.map((season) => (
          <section key={season.name}>
            <h2 className="titlePP">
              {season.name} ({season.year})
            </h2>

            <Slider {...settings}>
              {season.team.map((member) => (
                <div className="box-container" key={member.name}>
                  <div className="picture-container">
                    <h3>{member.name}</h3>

                    <img
                      src={member.image}
                      alt={member.name}
                      className="picture"
                    />
                  </div>

                  <div className="description-container">
                    <p className="sliderDescription">{member.role}</p>
                  </div>
                </div>
              ))}
            </Slider>

            {season !== seasons[seasons.length - 1] && <hr />}
          </section>
        ))}
      </div>
    </>
  );
}
