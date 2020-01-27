import React, { Component } from "react";
import cn from 'classnames';
import { isMobile } from 'react-device-detect';
import arrow from './assets/scrollarrow.png';
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
      <div className={cn(styles.header, { [styles.mobileHeader]: isMobile })}>
        {!isMobile && <ParalaxHeader headerScrollPercent={headerScrollPercent} />}

        <div className={styles.titleContainer } style={{opacity: 1 - (headerScrollPercent / 50)}}>
          <div className={cn(styles.title, { [styles.titleMobile]: isMobile })}>SANDRA <br />DA CRUZ MARTINS</div>
          <div className={cn(styles.divider, { [styles.dividerMobile]: isMobile })} />
          <div className={cn(styles.subTitle, { [styles.subTitleMobile]: isMobile })}>2D GAME ARTIST</div>
        </div>

        {!isMobile && (
          <div className={styles.scrollButtonContainer}>
            <div className={styles.scrollButton} onClick={this.scrollClickHandler} style={{backgroundImage: `url('${arrow}')`}}></div>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
