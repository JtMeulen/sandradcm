import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { isMobile } from 'react-device-detect';

import styles from './Navbar.module.css';

class Navbar extends Component {
    state = {
      forcedUpdate: 0
    };

    isWhite = isMobile ? true : false;

    componentDidUpdate() {
      if(!isMobile) {
        if(window.location.pathname !== "/" || this.props.headerScrollPercent > 60) {
            this.isWhite = true
        } else {
            this.isWhite = false;
        }
      }
    }

    forceUpdate = () => {
      if(!isMobile) {
        this.isWhite = false;
      }
      this.setState((prevState) => {
        return { forcedUpdate: prevState.forceUpdate++ }
      })
    }

    render() {
        const backgroundColor = this.isWhite ? 'white' : '';
        const textColor = this.isWhite ? 'black' : 'white';
        const border = this.isWhite ? '1px solid grey' : '';
        const height = this.isWhite ? '60px' : '80px';

        return (
          <div
            key={this.state.forcedUpdate}
            className={styles.navbar}
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              borderBottom: border,
              height: height
            }}
          >
            <div className={styles.navitems}>
              {window.location.pathname === "/" ? (
                <React.Fragment>
                  <Link
                    to="about-me-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass={styles.active}
                  >
                    ABOUT ME
                  </Link>
                  <Link
                    to="games-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass={styles.active}
                  >
                    GAMES
                  </Link>
                  <Link
                    to="art-section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    activeClass={styles.active}
                  >
                    ART
                  </Link>
                </React.Fragment>
              ) : (
                <NavLink onClick={() => this.forceUpdate()} to="/">
                  HOME
                </NavLink>
              )}
            </div>
          </div>
        );
    }
}

export default Navbar;