import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return(
            <div className={styles.navbar}>
                <img className={styles.title} src="http://www.sandradcm.com/wp-content/uploads/2015/03/SandradaCruzMartins.png" alt="" />
                <div className={styles.navitems}>
                    <NavLink to="/" exact activeClassName={styles.active}>GAMES</NavLink>
                    <NavLink to="/my-art" activeClassName={styles.active}>ART</NavLink>
                    <NavLink to="/about-me" activeClassName={styles.active}>ABOUT ME</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;