import { Link } from "react-router-dom";
import CardItemReusable from "./CardItemReusable";
import "./ResourcesInfo.css";

function ResourcesInfo() {
  return (
    <div className="resContainer">
      {/* <h1 className="hello">hello my name is harris khoo i like minecraft</h1> */}
      <div className="resWrapper">
        <Link to="/HowTo" className="resLinks" id="How-To">
          <CardItemReusable
            src={require("../images/logos/howTo.jpg")}
            text="How-Tos"
            label="Tutorials"
            path="/HowTo"
          />
        </Link>
        <Link to="/UsefulLinks" className="resLinks" id="UsefulLinks">
          <CardItemReusable
            src={require("../images/logos/chains.jpg")}
            text="Useful Links"
            label="First/How Resources"
            path="/UsefulLinks"
          />
        </Link>
        <Link to="/Tools" className="resLinks" id="Tools">
          <CardItemReusable
            src={require("../images/logos/wrench.jpg")}
            text="Tools"
            label="Tools Made For FTC"
            path="/Tools"
          />
        </Link>
        <Link to="/Clips" className="resLinks" id="Clips">
          <CardItemReusable
            src={require("../images/logos/paperClip.jpg")}
            text="Clips"
            label="Run Snippets"
            path="/Clips"
          />
        </Link>
      </div>
    </div>
  );
}

export default ResourcesInfo;
