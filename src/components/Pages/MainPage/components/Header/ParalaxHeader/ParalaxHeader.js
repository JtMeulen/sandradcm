import React, { Fragment } from 'react';

import styles from './ParalaxHeader.module.css';

const PARALAX_URL = [
  '1ij7FsjfufWuOQ2RiA1YbcluDFYHs9UbN',
  '1-YAfMlZiX8iXL6J_7KSY7qBS7hjVXY7W',
  '1BI3fGbI_cx4zGny-8Fpg7cRliZ_4ANpk',
  '1LGAPowQHxGwg5fIlrs3wGweQDL_owGzj',
  '1ORNPFRcnxrVtQ8BeH8ja3ki039zlMKBb'
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