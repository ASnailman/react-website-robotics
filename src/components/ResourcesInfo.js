import React from "react";
import { Link } from "react-router-dom";
import "./ResourcesInfo.css";

function ResourcesInfo() {
  return (
    <div className="resContainer">
      {/* <h1 className="hello">hello my name is harris khoo i like minecraft</h1> */}
      <div className="resWrapper">
        <Link to="/HowTo" className="resLinks" id="How-To">
          How-To
        </Link>
        <Link to="/UsefulLinks" className="resLinks" id="UsefulLinks">
          Useful Links
        </Link>
        <Link to="/Tools" className="resLinks" id="Tools">
          Tools
        </Link>
        <Link to="/Clips" className="resLinks" id="Clips">
          Clips
        </Link>
      </div>
    </div>
  );
}

export default ResourcesInfo;
