import React from 'react';
import YouTube from 'react-youtube';

class GarageSaleVid extends React.Component {

  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };


  render() {
    const opts = { height: '1900', width: '1080', playerVars: { autoplay: 0 } };
    const { videoId } = this.props

    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
      />
    );
  }
}


export default GarageSaleVid;