import React from "react";
import Slider from "react-slick";
import "./Slider.css"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon style={{color:"white"}} />
    </div>
);

const PrevArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{color:"white"}} />
    </div>
);

export default function TeamSlider({ title, members}) {

    const settings = {
      dots: true,
      className: "team-slider",
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 1,
      fade: false ,
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
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),

      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };

    return (
        <section className="carousel">

            <h2 className="titlePP">
                {title}
            </h2>

            <Slider {...settings}>

                {members.map((member, index) => (
                    <div className = "box-container" key = {index}>
                        <div className="picture-container">

                            <h3>
                                {member.name}
                            </h3>

                            <img
                            src={member.image}
                            alt={member.name}
                            className="picture"
                            />

                        </div>

                        <div className="description-container">

                            <p className="sliderDescription">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}