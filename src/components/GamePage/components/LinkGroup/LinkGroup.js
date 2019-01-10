import React from 'react';

import styles from './LinkGroup.module.css';

const LinkGroup = (props) => {
    const allLinks = props.links.map((link) => {
        return (
            <div>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                <span>·</span>
            </div>
        )
    })

    return(
        <div className={styles.LinkGroup}>
            {allLinks}
        </div>
    )
}

export default LinkGroup;