import React, {Component} from 'react';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {

    render() {
        const color = {
            serious: 'red',
            casual: 'green',
            art: 'lightblue'
        }
        return(
            <div className={styles.thumbnail} style={{background: color[this.props.category]}}>
                {this.props.name}
            </div>
        );
    }
}

export default Thumbnail;