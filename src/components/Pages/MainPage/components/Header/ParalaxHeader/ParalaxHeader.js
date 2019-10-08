import React, { Fragment } from 'react';

import styles from './ParalaxHeader.module.css';

const ParalaxHeader = ({ headerScrollPercent }) => {
  return (
    <Fragment>
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax0@2x.png")',
          position: 'fixed'
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax1@2x.png")',
          position: 'fixed',
          top: `-${headerScrollPercent * 1}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax3@2x.png")',
          position: 'fixed',
          top: `-${headerScrollPercent * 2}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax5@2x.png")',
          position: 'fixed',
          top: `-${headerScrollPercent * 5}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax7@2x.png")'
        }}
      />
    </Fragment>
  );
}

export default ParalaxHeader;