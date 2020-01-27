import React, { Fragment } from 'react';

import styles from './ParalaxHeader.module.css';

const PARALAX_URL = [
  '1XRPHab44WSvpWT-8M2ZHFxMkrM59EUen',
  '1CdP5ladfhHQ5IQZs4-jcyGjfT13iybwf',
  '1ogfzLg5iSKJwXNopH_68ddRezJjLC2yG',
  '1BmbPHunpEcrya06zF4bHUcc1tYi7RjND',
  '130M2MfnZnWK9gdtxYteG0QJypqiw0wEz'
]

const SPINNING_LAYER = [
  '1XRPHab44WSvpWT-8M2ZHFxMkrM59EUen',
]

const ParalaxHeader = ({ headerScrollPercent }) => {
  return (
    <Fragment>
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${PARALAX_URL[0]}')`,
          position: 'fixed'
        }}
      />
      <div
        className={styles.spinning}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${SPINNING_LAYER[0]}')`,
          position: 'fixed'
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${PARALAX_URL[1]}')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 1}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${PARALAX_URL[2]}')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 2}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${PARALAX_URL[3]}')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 5}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/uc?id=${PARALAX_URL[4]}')`
        }}
      />
    </Fragment>
  );
}

export default ParalaxHeader;