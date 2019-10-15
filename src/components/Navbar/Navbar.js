import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import styles from './Navbar.module.css';

class Navbar extends Component {
    state = {
      forcedUpdate: true
    }
    scrolled = false;

    componentDidMount() {
      setTimeout(() => {
        this.setState({forcedUpdate: true});
      }, 1);
    }

    componentDidUpdate() {
      if(window.location.pathname !== "/" || this.props.headerScrollPercent > 60) {
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
                <NavLink to="/">
                  HOME
                </NavLink>
              )}
            </div>
          </div>
        );
    }
}

export default Navbar;