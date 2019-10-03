import React, { Fragment } from 'react';

import styles from './ParalaxHeader.module.css';

const ParalaxHeader = ({ headerScrollPercent }) => {
  return (
    <Fragment>
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax0@2x.png")',
          transform: `translateY(${headerScrollPercent * 700}px)`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax1@2x.png")',
          transform: `translateY(${headerScrollPercent * 600}px)`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax3@2x.png")',
          transform: `translateY(${headerScrollPercent * 400}px)`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax5@2x.png")',
          transform: `translateY(${headerScrollPercent * 200}px)`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: 'url("http://www.firewatchgame.com/images/parallax/parallax7@2x.png")',
          transform: `translateY(${headerScrollPercent * 1}px)`
        }}
      />
    </Fragment>
  );
}

export default ParalaxHeader;