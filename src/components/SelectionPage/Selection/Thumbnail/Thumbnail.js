import React, {Component} from 'react';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {

    handleClick = () => {
        if(this.props.link) {
            this.props.history.push(this.props.link);
        }

        if(this.props.image) {
            console.log('Open modal!')
        }
    }

    render() {
        const color = {
            serious: 'lightyellow',
            casual: 'lightgreen',
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