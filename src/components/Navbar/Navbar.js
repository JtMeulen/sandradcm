import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

class Navbar extends Component {
    scrolled = false;

    componentDidUpdate() {
        if(window.location.pathname !== "/" || this.props.headerScrollPercent > 0.5) {
            this.scrolled = true
        } else {
            this.scrolled = false;
        }
    }

    render() {
        const backgroundColor = this.scrolled ? 'white' : '';
        const textColor = this.scrolled ? 'black' : 'white';
        const border = this.scrolled ? '1px solid grey' : '';
        const height = this.scrolled ? '60px' : '80px';

        return (
          <div
            className={styles.navbar}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              borderBottom: border,
              height: height
            }}
          >
            <div className={styles.navitems}>
              <NavLink to="/games" activeClassName={styles.active}>
                GAMES
              </NavLink>
              <NavLink to="/my-art" activeClassName={styles.active}>
                ART
              </NavLink>
              <NavLink to="/about-me" activeClassName={styles.active}>
                ABOUT ME
              </NavLink>
            </div>
          </div>
        );
    }
}

export default Navbar;