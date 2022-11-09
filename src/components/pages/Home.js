import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
// import UpcomingEvents from "../UpcomingEvents";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/* <UpcomingEvents /> */}
      <Footer />
    </>
  );
}

export default Home;
