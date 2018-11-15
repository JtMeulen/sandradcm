import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return(
            <div className={styles.navbar}>
                <h1 className={styles.title}>Sandra da Cruz Martins</h1>
                <div className={styles.navitems}>
                    <NavLink to="/" exact activeClassName={styles.active}>Games</NavLink>
                    <NavLink to="/my-art" activeClassName={styles.active}>Art</NavLink>
                    <NavLink to="/about-me" activeClassName={styles.active}>About Me</NavLink>
                </div>
            </div>
        );
    }
}

export default Navbar;