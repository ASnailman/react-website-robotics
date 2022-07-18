import React, { Component } from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const NextArrow = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: "white" }} />
    </div>
  );
};

const PrevArrow = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: "white" }} />
    </div>
  );
};

export default class TeamSlider extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
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
      <div className="carousel">
        <div>
          <h1 className="teammembers">TEAM MEMBERS</h1>
        </div>

        <h2 className="titleFF">Freight Frenzy Team Members</h2>
        <Slider {...settings}>
          <div className="box-container">
            <h3>Harris Khoo</h3>
          </div>
          <div>
            <h3>Adam Maoued</h3>
          </div>
          <div>
            <h3>Mahee Karim</h3>
          </div>
          <div>
            <h3>Mohammed Afzal Khan</h3>
          </div>
          <div>
            <h3>Nubaid Rahman</h3>
          </div>
          <div>
            <h3>Manar</h3>
          </div>
          <div>
            <h3>Wajeeh</h3>
          </div>
        </Slider>

        <h2 className="title">Ultimate Goal Team Members</h2>
        <Slider {...settings}>
          <div>
            <h3>Omar Daoued</h3>
          </div>
          <div>
            <h3>Ibraheem Maoued</h3>
          </div>
          <div>
            <h3>Sana</h3>
          </div>
          <div>
            <h3>Adel Rahmoun</h3>
          </div>
          <div>
            <h3>Harris Khoo</h3>
          </div>
          <div>
            <h3>Adam Maoued</h3>
          </div>
          <div>
            <h3>Mahee Karim</h3>
          </div>
          <div>
            <h3>Malak Daoued</h3>
          </div>
          <div>
            <h3>Nadine Gharsali</h3>
          </div>
        </Slider>

        <h2 className="title">Skystone Team Members</h2>
        <Slider {...settings}>
          <div>
            <h3>Omar Daoued</h3>
          </div>
          <div>
            <h3>Ibraheem Maoued</h3>
          </div>
          <div>
            <h3>Sana</h3>
          </div>
          <div>
            <h3>Adel Rahmoun</h3>
          </div>
          <div>
            <h3>Harris Khoo</h3>
          </div>
          <div>
            <h3>Adam Maoued</h3>
          </div>
          <div>
            <h3>Mahee Karim</h3>
          </div>
          <div>
            <h3>Malak Daoued</h3>
          </div>
          <div>
            <h3>Nadine Gharsali</h3>
          </div>
          <div>
            <h3>Mahdi Rezgui</h3>
          </div>
          <div>
            <h3>Yusuf Farooqi</h3>
          </div>
        </Slider>

        <h2 className="title">Rover Ruckus Team Members</h2>
        <Slider {...settings}>
          <div>
            <h3>Omar Daoued</h3>
          </div>
          <div>
            <h3>Ibraheem Maoued</h3>
          </div>
          <div>
            <h3>Sana</h3>
          </div>
          <div>
            <h3>Adel Rahmoun</h3>
          </div>
          <div>
            <h3>Yasseen Mohammed</h3>
          </div>
          <div>
            <h3>Munzir</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
