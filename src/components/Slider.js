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
      fade: true,
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

        <h2 className="titlePP">Power Play Team Members</h2>
        <Slider {...settings}>
          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Harris</h3>
              <img
                src={require("../images/TeamMembers/harris.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Software/Control Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Adam</h3>
              <img
                src={require("../images/TeamMembers/adam.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Electrical Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Mahee</h3>
              <img
                src={require("../images/TeamMembers/mahee.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Mechanical Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="afzal">Afzal</h3>
              <img
                src={require("../images/TeamMembers/afzal.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                CAD Desginer/Mechanical Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Nubaid</h3>
              <img
                src={require("../images/TeamMembers/nubaid.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software Team Member/Electrical Parts Owner/ENB Lead
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Wajeeh</h3>
              <img
                src={require("../images/TeamMembers/wajeeh.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software Team Member/Mechanical Parts Owner
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Aleena</h3>
              <img
                src={require("../images/TeamMembers/aleena.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Media Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Oais</h3>
              <img
                src={require("../images/howLogo.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription"></p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Yusuf</h3>
              <img
                src={require("../images/howLogo.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription"></p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Abdurahman</h3>
              <img
                src={require("../images/howLogo.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription"></p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Aziz</h3>
              <img
                src={require("../images/howLogo.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription"></p>
            </div>
          </div>
        </Slider>

        <hr className="PPhr" />

        <h2 className="titleFF">Freight Frenzy Team Members</h2>

        <Slider {...settings}>
          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Harris</h3>
              <img
                src={require("../images/TeamMembers/harris.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Software/Control Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Adam</h3>
              <img
                src={require("../images/TeamMembers/adam.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Electrical Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Mahee</h3>
              <img
                src={require("../images/TeamMembers/mahee.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Mechanical Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="afzal">Afzal</h3>
              <img
                src={require("../images/TeamMembers/afzal.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                CAD Desginer/Mechanical Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Nubaid</h3>
              <img
                src={require("../images/TeamMembers/nubaid.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software Team Member/Electrical Parts Owner
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Manar</h3>
              <img
                src={require("../images/TeamMembers/manar.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Media + Outreach Lead/Mechanical Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Wajeeh</h3>
              <img
                src={require("../images/TeamMembers/wajeeh.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software Team Member/Mechanical Parts Owner
              </p>
            </div>
          </div>
        </Slider>

        <hr className="FFhr" />

        <h2 className="title">Ultimate Goal Team Members</h2>
        <Slider {...settings}>
          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Omar</h3>
              <img
                src={require("../images/TeamMembers/omar.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Mechanical Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Ibraheem</h3>
              <img
                src={require("../images/TeamMembers/ibraheem.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software + Control Lead/Electrical Lead
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Sana</h3>
              <img
                src={require("../images/TeamMembers/sana.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Media/Outreach Lead</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Adel</h3>
              <img
                src={require("../images/TeamMembers/adel.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                ENB Lead/Mechanical Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Harris</h3>
              <img
                src={require("../images/TeamMembers/harris.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">Software Team Member</p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Adam</h3>
              <img
                src={require("../images/TeamMembers/adam.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Software Team Member/Electrical Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Mahee</h3>
              <img
                src={require("../images/TeamMembers/mahee.png")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Mechanical Team Lead/Mechanical Parts Owner
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Malak</h3>
              <img
                src={require("../images/TeamMembers/malak.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Mechanical Team Member/Media Team Member
              </p>
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3 className="sliderName">Nadine</h3>
              <img
                src={require("../images/TeamMembers/nadine.jpg")}
                alt="example"
                className="picture"
              />
            </div>
            <div className="description-container">
              <p className="sliderDescription">
                Mechanical Team Member/Outreach Team Member
              </p>
            </div>
          </div>
        </Slider>

        {/* <hr />

        <h2 className="title">Skystone Team Members</h2>
        <Slider {...settings}>
          <div className="box-container">
            <div className="picture-container">
              <h3>Omar</h3>
              <img
                src={require("../images/TeamMembers/omar.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Ibraheem</h3>
              <img
                src={require("../images/TeamMembers/ibraheem.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Sana</h3>
              <img
                src={require("../images/TeamMembers/sana.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Adel</h3>
              <img
                src={require("../images/TeamMembers/adel.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Harris</h3>
              <img
                src={require("../images/TeamMembers/harris.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Adam</h3>
              <img
                src={require("../images/TeamMembers/adam.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Mahee</h3>
              <img
                src={require("../images/TeamMembers/mahee.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Malak</h3>
              <img
                src={require("../images/TeamMembers/malak.jpg")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Nadine</h3>
              <img
                src={require("../images/TeamMembers/nadine.jpg")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Mahdi</h3>
              <img
                src={require("../images/TeamMembers/mahdi.JPG")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Yusuf</h3>
              <img
                src={require("../images/TeamMembers/wajeeh.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>
        </Slider> */}

        {/* <hr />

        <h2 className="title">Rover Ruckus Team Members</h2>
        <Slider {...settings}>
          <div className="box-container">
            <div className="picture-container">
              <h3>Omar</h3>
              <img
                src={require("../images/TeamMembers/omar.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Ibraheem</h3>
              <img
                src={require("../images/TeamMembers/ibraheem.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Sana</h3>
              <img
                src={require("../images/TeamMembers/sana.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Adel</h3>
              <img
                src={require("../images/TeamMembers/adel.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Yasseen</h3>
              <img
                src={require("../images/TeamMembers/yaseen.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>

          <div className="box-container">
            <div className="picture-container">
              <h3>Munzir</h3>
              <img
                src={require("../images/TeamMembers/munzir.png")}
                alt="example"
                className="picture"
              />
            </div>
          </div>
        </Slider> */}
      </div>
    );
  }
}
