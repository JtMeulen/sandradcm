import React, {Component} from 'react';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {

    handleClick = () => {
        if (this.props.link) {
            this.props.history.push(this.props.link);
        };

        if (this.props.image) {
            console.log('Open modal!');
        };
    };

    getBackground = () => {
        if (!this.props.image) {
            return 'url("images/common/placeholder-image.jpg")';
        }

        if (this.props.category === 'art') {
            return 'url("images/art/' + this.props.image + '")';
        } else {
            return 'url("images/games/thumbnails/' + this.props.image + '")';
        }
    }

    getBackgroundPosition = () => {
        if (!this.props.backgroundOffset) {
            return 'center';
        }

        return this.props.backgroundOffset
    }

    render() {
        const backgroundStyle = {
            backgroundImage: this.getBackground(),
            backgroundPosition: this.getBackgroundPosition()
        };

        return(
            <div className={styles.thumbnail} onClick={this.handleClick}>
                <div className={styles.image} style={backgroundStyle} id={this.props.id}>
                    <div className={styles.overlay}>
                        <span>{this.props.name}</span>
                    </div>
                </div>
            </div>
        );
    };
};

export default Thumbnail;