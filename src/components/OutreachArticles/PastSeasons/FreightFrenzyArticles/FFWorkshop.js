import React from "react";
import "../../article.css";

function FFWorkshop() {
  return (
    <div className="articlePost">
      <div className="articleWrapper">
        {/* <img className="singlePostImg" src="" alt="" /> */}
        <h1 className="singlePostTitle">2021 FTC Workshop</h1>

        <div className="articleInfo">
          <span>
            <p>author</p>
            <p>date</p>
          </span>
        </div>
        <div className="image">image</div>
        <p className="articleDescription">
          description
          <br />
          <br />
          twitter post
          <br />
          <br />
          description
          <br />
          <br />
          youtube video
          <br />
          <br />
          description
        </p>
      </div>
    </div>
  );
}

export default FFWorkshop;
