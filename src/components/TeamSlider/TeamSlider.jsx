import Slider from "react-slick";
import { teams } from "../../data/teams";
import "./TeamSlider.css";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";


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
        <ul style={{ margin: "0px" }}>
          {dots}
        </ul>
      </div>
    ),

    afterChange: function (index) {
      console.log(`Slider changed to: ${index + 1}`);
    },
  };


  return (
    <>
    <h1 className="heading">
      TEAM MEMBERS
    </h1>
    <div className="carousel">
      {teams.map((team) => (
        <section 
          key={team.title}
        >

          <h2 className="titlePP">
            {team.title}
          </h2>


          <Slider {...settings}>

            {team.members.map((member) => (

              <div 
                className="box-container"
                key={member.name}
              >

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


          {team !== teams[teams.length - 1] && <hr />}

        </section>
        
      ))}
      </div>
    </>
  );
}