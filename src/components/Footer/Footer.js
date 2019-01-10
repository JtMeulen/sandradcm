import React, {Component} from 'react';

import styles from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={styles.Footer}>
                <p>Sandra da Cruz Martins</p>
                <p><a href='https://www.linkedin.com/in/sandradacruzmartins/' target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href='https://www.facebook.com/sandra.dacruzmartins' target="_blank" rel="noopener noreferrer">Facebook</a></p>
            </div>
        );
    }
}

export default Footer;