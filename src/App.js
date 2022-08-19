import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TeamMembers from "./components/pages/TeamMembers";
import Seasons from "./components/pages/Seasons";
import About from "./components/pages/About";
import PastOutreach from "./components/pages/PastOutreach";
import CurrentOutreach from "./components/pages/CurrentOutreach";
import SurveyForm from "./components/SurveyForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import BetterNavbar from "./components/BetterNavbar";
import Navbar from "./components/Navbar";
import FFRobot from "./components/SeasonsPages/FFRobot";
import UGRobot from "./components/SeasonsPages/UGRobot";
import Awards from "./components/SeasonsPages/Awards";
import FFWorkshop from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/FFWorkshop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <BetterNavbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/teammembers" exact element={<TeamMembers />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/pastoutreach" exact element={<PastOutreach />} />
          <Route path="/outreach" exact element={<CurrentOutreach />} />
          <Route path="/SurveyForm" exact element={<SurveyForm />} />
          <Route path="/FFRobot" exact element={<FFRobot />} />
          <Route path="/UGRobot" exact element={<UGRobot />} />
          <Route path="/Awards" exact element={<Awards />} />
          <Route path="/FFWorkshop" exact element={<FFWorkshop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
