import React from "react";
import "../../App.css";
import Footer from "../Footer";
import SeasonsInfo from "../SeasonsInfo";

function Seasons() {
  return (
    <>
      <h1 className="seasons">PAST SEASONS</h1>
      <SeasonsInfo />
      <Footer />
    </>
  );
}

export default Seasons;
