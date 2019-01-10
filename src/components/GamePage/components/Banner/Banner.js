import React, {Component} from 'react';

import styles from './Banner.module.css';

class Banner extends Component {

    render(){

        let renderBanner = <div className={styles.Banner} style={{backgroundImage: `url('${this.props.url}')`}}></div>

        if (this.props.type === "video") {
            renderBanner = <p>videooooooo</p>
        }

        return renderBanner;
    }
}

export default Banner;