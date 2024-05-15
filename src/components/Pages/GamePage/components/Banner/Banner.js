import React, {Component} from 'react';

import styles from './Banner.module.css';

class Banner extends Component {

    render(){

        let renderBanner = (
            <div
                className={styles.Banner}
                style={{backgroundImage: `url('https://drive.google.com/thumbnail?id=${this.props.googleId}&sz=w1200')`}}
            />
        );

        if (this.props.video) {
            renderBanner = <p>videooooooo</p>
        }

        return renderBanner;
    }
}

export default Banner;