import React from 'react';
import YouTube from 'react-youtube';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

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
    <div className={cn(styles.video, { [styles.mobileVideo]: isMobile })}>
      <YouTube
        videoId={props.videoId}
        opts={options}
      />
    </div>
  );
}

export default Video;