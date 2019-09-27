import React, { Component } from "react";

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
        <div className={styles.titleContainer} style={{opacity: 1 - (headerScrollPercent * 8)}}>
          <div className={styles.title}>Sandra da Cruz Martins</div>
          <div className={styles.divider} />
          <div className={styles.subTitle}>2D game artist</div>
        </div>

        <div className={styles.scrollButtonContainer}>
          <div className={styles.scrollButton} onClick={this.scrollClickHandler}></div>
        </div>
      </div>
    );
  }
}

export default Header;
