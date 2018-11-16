import React, {Component} from 'react';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {

    handleClick = () => {
        this.props.link && this.props.history.push(this.props.link);
    }

    render() {
        const color = {
            serious: 'red',
            casual: 'green',
            art: 'lightblue'
        }

        return(
            <div className={styles.thumbnail} style={{background: color[this.props.category]}} onClick={this.handleClick}>
                {this.props.name}
            </div>
        );
    }
}

export default Thumbnail;