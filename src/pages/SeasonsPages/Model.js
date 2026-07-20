import React from "react";

function Model() {
  return (
    <div class="sketchfab-embed-wrapper">
      {" "}
      <iframe
        title="Drivetrain Assembly"
        frameborder="1"
        width={500}
        height={500}
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/b478750a8dda4634a390dc304bc4c542/embed"
      >
        {" "}
      </iframe>{" "}
    </div>
  );
}

export default Model;
