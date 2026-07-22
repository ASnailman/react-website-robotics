  import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

  import Partners from 'components/Partners/Partners';
import SurveyForm from 'components/SurveyForm/SurveyForm';
import UpcomingEvents from 'components/UpcomingEvents/UpcomingEvents';

  import About from 'pages/About';
import CurrentOutreach from 'pages/CurrentOutreach';
import CurrentSeason from 'pages/CurrentSeason';
import Home from 'pages/Home';
import PastOutreach from 'pages/PastOutreach';
import Resources from 'pages/Resources';
import Seasons from 'pages/Seasons';
import TeamMembers from 'pages/TeamMembers';

  import CatFamDay from 'pages/OutreachArticles/PowerPlayArticles/CatFamDay';
import FLLScrim from 'pages/OutreachArticles/PowerPlayArticles/FLLScrim';
import IgniteAndWorkshop from 'pages/OutreachArticles/PowerPlayArticles/IgniteAndWorkshop';
import PowerPlayKickoff from 'pages/OutreachArticles/PowerPlayArticles/PowerPlayKickoff';
import PreQualScrim from 'pages/OutreachArticles/PowerPlayArticles/PreQualScrim';
import PreScrim from 'pages/OutreachArticles/PowerPlayArticles/PreScrim';
import StemCamp from 'pages/OutreachArticles/PowerPlayArticles/StemCamp';

  import FFEngineeringDay from 'pages/OutreachArticles/FreightFrenzyArticles/FFEngineeringDay';
import FFWorkshop from 'pages/OutreachArticles/FreightFrenzyArticles/FFWorkshop';
import FLLState from 'pages/OutreachArticles/FreightFrenzyArticles/FLLState';
import FogFreeGoggles from 'pages/OutreachArticles/FreightFrenzyArticles/FogFreeGoggles';
import MiniScrimmage from 'pages/OutreachArticles/FreightFrenzyArticles/MiniScrimmage';
import ProjectLeadWay from 'pages/OutreachArticles/FreightFrenzyArticles/ProjectLeadWay';
import RobotMall from 'pages/OutreachArticles/FreightFrenzyArticles/RobotMall';
import TeamPractice from 'pages/OutreachArticles/FreightFrenzyArticles/TeamPractice';
import TrailblazersPractice from 'pages/OutreachArticles/FreightFrenzyArticles/TrailblazersPractice';

  import CoffeeHouse from 'pages/OutreachArticles/UltimateGoalArticles/CoffeeHouse';
import RonaldHouse from 'pages/OutreachArticles/UltimateGoalArticles/RonaldHouse';
import UGWorkshop from 'pages/OutreachArticles/UltimateGoalArticles/UGWorkshop';

  import Clips from 'pages/ResourcePages/Clips/Clips';
import DocSpecs from 'pages/ResourcePages/DocSpecs/DocSpecs';
import HowTo from 'pages/ResourcePages/HowTo/HowTo';
import Tools from 'pages/ResourcePages/Tools/Tools';
import UsefulLinks from 'pages/ResourcePages/UsefulLinks/UsefulLinks';

  import FFRobot from 'pages/SeasonsPages/FFRobot';
import PastAwards from 'pages/SeasonsPages/PastAwards';
import PPRobot from 'pages/SeasonsPages/PPRobot';
import UGRobot from 'pages/SeasonsPages/UGRobot';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


  function AppContent() {
    const location = useLocation();

    return (
      <>
        <Navbar />
        <ScrollToTop />
        <Routes>
         
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/partners" exact element={<Partners />} />
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
          <Route path="/FFEngineeringDay" exact element={<FFEngineeringDay />} />
          <Route path="/FLLState" exact element={<FLLState />} />
          <Route path="/FogFreeGoggles" exact element={<FogFreeGoggles />} />
          <Route path="/MiniScrimmage" exact element={<MiniScrimmage />} />
          <Route path="/ProjectLeadWay" exact element={<ProjectLeadWay />} />
          <Route path="/RobotMall" exact element={<RobotMall />} />
          <Route path="/TeamPractice" exact element={<TeamPractice />} />
          <Route path="/TrailblazersPractice" exact element={<TrailblazersPractice />} />

          <Route path="/CoffeeHouse" exact element={<CoffeeHouse />} />
          <Route path="/RonaldHouse" exact element={<RonaldHouse />} />
          <Route path="/UGWorkshop" exact element={<UGWorkshop />} />

          <Route path="/StemCamp" exact element={<StemCamp />} />
          <Route path="/IgniteAndWorkshop" exact element={<IgniteAndWorkshop />} />
          <Route path="/PowerPlayKickoff" exact element={<PowerPlayKickoff />} />

          <Route path="/CaterpillarFamilyDay" exact element={<CatFamDay />} />
          <Route path="/PreMeetScrimPP" exact element={<PreScrim />} />
          <Route path="/FLLScrim" exact element={<FLLScrim />} />
          <Route path="/PreQualScrim" exact element={<PreQualScrim />} />

          <Route path="/HowTo" exact element={<HowTo />} />
          <Route path="/UsefulLinks" exact element={<UsefulLinks />} />
          <Route path="/Tools" exact element={<Tools />} />
          <Route path="/DocSpecs" exact element={<DocSpecs />} />
          <Route path="/Clips" exact element={<Clips />} />

          <Route path="/UpcomingEvents" exact element={<UpcomingEvents />} />
        </Routes>


        <div
          className={
            location.pathname === "/teammembers"
              ? "footer-wrapper team-footer"
              : "footer-wrapper"
          }
        >
          <Footer />
        </div>
      </>
    );
  }


  function App() {
    return (
      <Router>
        <AppContent />
      </Router>
    );
  }


  export default App;