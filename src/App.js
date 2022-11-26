import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import TeamMembers from "./components/pages/TeamMembers";
import Seasons from "./components/pages/Seasons";
import About from "./components/pages/About";
import Resources from "./components/pages/Resources";
import PastOutreach from "./components/pages/PastOutreach";
import CurrentOutreach from "./components/pages/CurrentOutreach";
import SurveyForm from "./components/SurveyForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import BetterNavbar from "./components/BetterNavbar";
import Navbar from "./components/Navbar";
import FFRobot from "./components/SeasonsPages/FFRobot";
import UGRobot from "./components/SeasonsPages/UGRobot";
import PPRobot from "./components/SeasonsPages/PPRobot";
import PastAwards from "./components/SeasonsPages/PastAwards";
import FFWorkshop from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/FFWorkshop";
import FFEngineeringDay from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/FFEngineeringDay";
import FLLState from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/FLLState";
import FogFreeGoggles from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/FogFreeGoggles";
import MiniScrimmage from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/MiniScrimmage";
import ProjectLeadWay from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/ProjectLeadWay";
import RobotMall from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/RobotMall";
import TeamPractice from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/TeamPractice";
import TrailblazersPractice from "./components/OutreachArticles/PastSeasons/FreightFrenzyArticles/TrailblazersPractice";
import CoffeeHouse from "./components/OutreachArticles/PastSeasons/UltimateGoalArticles/CoffeeHouse";
import RonaldHouse from "./components/OutreachArticles/PastSeasons/UltimateGoalArticles/RonaldHouse";
import UGWorkshop from "./components/OutreachArticles/PastSeasons/UltimateGoalArticles/UGWorkshop";
import HowTo from "./components/ResourcePages/HowTo";
import UsefulLinks from "./components/ResourcePages/UsefulLinks";
import Tools from "./components/ResourcePages/Tools";
import Clips from "./components/ResourcePages/Clips";
import StemCamp from "./components/OutreachArticles/CurrentSeason/StemCamp";
import IgniteAndWorkshop from "./components/OutreachArticles/CurrentSeason/IgniteAndWorkshop";
import PowerPlayKickoff from "./components/OutreachArticles/CurrentSeason/PowerPlayKickoff";
import CurrentSeason from "./components/pages/CurrentSeason";
import DocSpecs from "./components/ResourcePages/DocSpecs";
import UpcomingEvents from "./components/UpcomingEvents";
import CatFamDay from "./components/OutreachArticles/CurrentSeason/CatFamDay";
import PreScrim from "./components/OutreachArticles/CurrentSeason/PreScrim";
import FLLScrim from "./components/OutreachArticles/CurrentSeason/FLLScrim";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <BetterNavbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/seasons" exact element={<Seasons />} />
          <Route path="/currentseason" exact element={<CurrentSeason />} />
          <Route path="/teammembers" exact element={<TeamMembers />} />
          <Route path="/Resources" exact element={<Resources />} />
          <Route path="/pastoutreach" exact element={<PastOutreach />} />
          <Route path="/outreach" exact element={<CurrentOutreach />} />
          <Route path="/SurveyForm" exact element={<SurveyForm />} />
          <Route path="/FFRobot" exact element={<FFRobot />} />
          <Route path="/UGRobot" exact element={<UGRobot />} />
          <Route path="/PPRobot" exact element={<PPRobot />} />
          <Route path="/PastAwards" exact element={<PastAwards />} />
          <Route path="/FFWorkshop" exact element={<FFWorkshop />} />
          <Route
            path="/FFEngineeringDay"
            exact
            element={<FFEngineeringDay />}
          />
          <Route path="/FLLState" exact element={<FLLState />} />
          <Route path="/FogFreeGoggles" exact element={<FogFreeGoggles />} />
          <Route path="/MiniScrimmage" exact element={<MiniScrimmage />} />
          <Route path="/ProjectLeadWay" exact element={<ProjectLeadWay />} />
          <Route path="/RobotMall" exact element={<RobotMall />} />
          <Route path="/TeamPractice" exact element={<TeamPractice />} />
          <Route
            path="/TrailblazersPractice"
            exact
            element={<TrailblazersPractice />}
          />
          <Route path="/CoffeeHouse" exact element={<CoffeeHouse />} />
          <Route path="/RonaldHouse" exact element={<RonaldHouse />} />
          <Route path="/UGWorkshop" exact element={<UGWorkshop />} />
          <Route path="/StemCamp" exact element={<StemCamp />} />
          <Route
            path="/IgniteAndWorkshop"
            exact
            element={<IgniteAndWorkshop />}
          />
          <Route
            path="/PowerPlayKickoff"
            exact
            element={<PowerPlayKickoff />}
          />
          <Route path="/CaterpillarFamilyDay" exact element={<CatFamDay />} />
          <Route path="/PreMeetScrimPP" exact element={<PreScrim />} />
          <Route path="/FLLScrim" exact element={<FLLScrim />} />
          <Route path="/HowTo" exact element={<HowTo />} />
          <Route path="/UsefulLinks" exact element={<UsefulLinks />} />
          <Route path="/Tools" exact element={<Tools />} />
          <Route path="/DocSpecs" exact element={<DocSpecs />} />
          <Route path="/Clips" exact element={<Clips />} />
          <Route path="/UpcomingEvents" exact element={<UpcomingEvents />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
