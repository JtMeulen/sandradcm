import React, { Component } from "react";

import ParalaxHeader from './ParalaxHeader/ParalaxHeader';
import styles from "./Header.module.css";

class Header extends Component {
  scrollClickHandler = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth'
    });
  }

  render() {
    const { headerScrollPercent } = this.props;

    return (
      <div className={styles.header}>
        <ParalaxHeader headerScrollPercent={headerScrollPercent} />

        <div className={styles.titleContainer} style={{opacity: 1 - (headerScrollPercent / 20)}}>
          <div className={styles.title}>SANDRA DA CRUZ MARTINS</div>
          <div className={styles.divider} />
          <div className={styles.subTitle}>2D GAME ARTIST</div>
        </div>

        <div className={styles.scrollButtonContainer}>
          <div className={styles.scrollButton} onClick={this.scrollClickHandler}></div>
        </div>
      </div>
    );
  }
}

export default Header;
