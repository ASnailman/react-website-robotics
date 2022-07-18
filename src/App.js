import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TeamMembers from "./components/pages/TeamMembers";
import Seasons from "./components/pages/Seasons";
import About from "./components/pages/About";
import Outreach from "./components/pages/Outreach";
import SurveyForm from "./components/SurveyForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/teammembers" exact element={<TeamMembers />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/outreach" exact element={<Outreach />} />
          <Route path="/surveyform" exact element={<SurveyForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
