import React from 'react';

import styles from './Title.module.css';

const Title = (props) => {
    const title = {
        games: 'My Games',
        art: 'My Art Page',
        about: 'About Me'
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.bar}></div>
                    <span>{title[props.title].toUpperCase()}</span>
                <div className={styles.bar}></div>
            </div>
            {props.children && <span className={styles.subtitle}>{props.children}</span>}
        </div>
    )
};

export default Title;