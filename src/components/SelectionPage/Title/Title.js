import React from 'react';

import styles from './Title.module.css';

const Title = (props) => {
    const title = {
        games: 'My Games',
        art: 'My Art Page',
        about: 'About Me'
    }

    return (
        <div className={styles.title}>
            <div className={styles.bar}></div>
                <span>{title[props.title]}</span>
            <div className={styles.bar}></div>
        </div>
    )
};

export default Title;