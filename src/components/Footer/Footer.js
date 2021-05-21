import React, {Component} from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <p>Copyright © {new Date().getFullYear()} Sandra da Cruz Martins</p>
            </div>
        );
    }
}

export default Footer;