import React, { Component } from "react";

import styles from "./Header.module.css";

class Header extends Component {
  state = {
    scrollPosition: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({ scrollPosition: scrolled });
  }

  scrollClickHandler = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth'
    });
  }


  render() {
    const { scrollPosition } = this.state;

    return (
      <div className={styles.header}>
        <div className={styles.titleContainer} style={{opacity: 1 - (scrollPosition * 8)}}>
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
