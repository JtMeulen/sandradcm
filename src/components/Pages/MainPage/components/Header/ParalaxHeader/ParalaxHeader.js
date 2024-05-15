import React, { Fragment } from 'react';

import styles from './ParalaxHeader.module.css';

const PARALAX_URL = [
  '1M_Csb4gSqI_iYK-Lw0U_IlGXhAg-uDBo',
  '1HaJO0CjjA1E9YXcohBE9dyeq-leefGyB',
  '1BfdDAUq8mERjZDOXhSFdubtISXCBmaZk',
  '1i0VYbDoBprnCU1le_eWUwcPMxstH6KtR',
  '1KbBfBfSdX3unsx9kf0pxONQmVn77dgeN',
  '1Zy0_bgf2EK0Rq5mECwEUcnmwzVmq0rlE',
  '1Ndp5N3xCO_ffuDvRcz9kfdS5KOcYlBmT'
]

const ParalaxHeader = ({ headerScrollPercent }) => {
  return (
    <Fragment>
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[0]}&sz=w1200')`,
          position: 'fixed'
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[1]}&sz=w1200')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 1}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[2]}&sz=w1200')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 4}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[3]}&sz=w1200')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 4}px`
        }}
      />
      <div
        className={styles.spinningRev}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[4]}&sz=w1200')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 6}px`
        }}
      />
      <div
        className={styles.spinning}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[5]}&sz=w1200')`,
          position: 'fixed',
          top: `-${headerScrollPercent * 6}px`
        }}
      />
      <div
        className={styles.paralax}
        style={{
          backgroundImage: `url('https://drive.google.com/thumbnail?id=${PARALAX_URL[6]}&sz=w1200')`
        }}
      />
    </Fragment>
  );
}

export default ParalaxHeader;