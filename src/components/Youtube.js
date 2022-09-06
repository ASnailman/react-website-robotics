// import YouTube from "react-youtube";
import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;

// class Youtube extends Component {
//   videoOnReady(event) {
//     // access to player in all event handlers via event.target
//     const player = event.target;
//     player.pauseVideo();
//     player.seekTo(1);
//   }
//   videoOnPlay(event) {
//     // access to player in all event handlers via event.target
//     const player = event.target;
//   }

//   render() {
//     const opts = {
//       height: "390",
//       width: "640",
//       playerVars: {
//         // https://developers.google.com/youtube/player_parameters
//         autoplay: 1,
//       },
//     };

//     const { videoId } = this.props;

//     return (
//       <YouTube
//         videoId={videoId}
//         opts={opts}
//         onReady={this.videoOnReady}
//         onPlay={this.videoOnPlay}
//       />
//     );
//   }
// }
