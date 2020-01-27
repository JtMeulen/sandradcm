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
        if(window.location.pathname !== "/" || this.props.headerScrollPercent > 65) {
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
        return (
          <div
            key={this.state.forcedUpdate}
            className={styles.navbar}
            style={{
              backgroundColor: 'white',
              color: 'black',
              borderBottom: '1px solid grey',
              height: '60px',
              opacity: this.isWhite ? '1' : '0'
            }}
          >
            <div className={styles.navitems}>
              {window.location.pathname === "/" ? (
                <React.Fragment>
                  <Link
                    to="about-me-section"
                    spy={true}
                    smooth={true}
                    duration={300}
                    activeClass={styles.active}
                  >
                    ABOUT ME
                  </Link>
                  <Link
                    to="games-section"
                    spy={true}
                    smooth={true}
                    duration={300}
                    activeClass={styles.active}
                  >
                    GAMES
                  </Link>
                  <Link
                    to="art-section"
                    spy={true}
                    smooth={true}
                    duration={300}
                    activeClass={styles.active}
                  >
                    ART
                  </Link>
                  <Link
                    to="contact-section"
                    spy={true}
                    smooth={true}
                    duration={300}
                    activeClass={styles.active}
                  >
                    CONTACT
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