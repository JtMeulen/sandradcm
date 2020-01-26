import React, {Component} from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <p>Copyright © 2020 Sandra da Cruz Martins</p>
            </div>
        );
    }
}

export default Footer;