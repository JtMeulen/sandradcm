import React from 'react';
import YouTube from 'react-youtube';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import styles from './Video.module.css';

class Video extends React.Component {
  state = {
    startVideo: false
  }

  play = () => {
    console.log('play')
    this.setState({ startVideo: true })
  }

  render(){
    const { startVideo } = this.state;
    const { hasThumbnail = false } = this.props;

    return (
      <div className={cn(styles.video, { [styles.mobileVideo]: isMobile })}>
        {!startVideo && hasThumbnail && (
          <div onClick={this.play} className={styles.thumbnail} style={{backgroundImage: `url('https://drive.google.com/uc?id=${hasThumbnail}')`}}>
            <div className={styles.play} />
          </div>
        )}
        {startVideo && hasThumbnail && (
          <YouTube
            videoId={this.props.videoId}
            opts={{
              height: '100%',
              width: '100%',
              playerVars: { // https://developers.google.com/youtube/player_parameters
                modestbranding: 1,
                autoplay: 1
              }
            }}
          />
        )}

        {!hasThumbnail && (
          <YouTube
          videoId={this.props.videoId}
          opts={{
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              modestbranding: 1,
              autoplay: 0
            }
          }}
        />
        )}
      </div>
    );
  }
}

export default Video;