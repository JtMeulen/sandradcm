import React from 'react';
import YouTube from 'react-youtube';

import styles from './Video.module.css';

const Video = (props) => {
  const options = {
    height: '100%',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      modestbranding: 1
    }
  };
  return (
    <div className={styles.video}>
      <YouTube
        videoId={props.videoId}
        opts={options}
      />
    </div>
  );
}

export default Video;