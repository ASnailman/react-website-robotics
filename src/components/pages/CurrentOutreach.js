import React from "react";
import "../../App.css";
import Footer from "../Footer";
import NewOutreachInfo from "../NewOutreachInfo";

function CurrentOutreach() {
  return (
    <>
      <h1 className="outreach"> CURRENT OUTREACH</h1>;
      <NewOutreachInfo />
      <Footer />
    </>
  );
}

export default CurrentOutreach;
