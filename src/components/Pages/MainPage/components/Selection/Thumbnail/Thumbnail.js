import React, {Component} from 'react';

import Modal from '../../../../../Modal/Modal';
import Slider from '../../../../../Slider';

import styles from './Thumbnail.module.css';

class Thumbnail extends Component {

    state = {
        modal: false
    }

    closeModalHandler = () => {
        this.setState({
            modal: false
        });
    }

    handleClick = () => {
        if (this.props.link) {
            this.props.history.push(this.props.link);
        };

        if (this.props.image && this.props.category === 'art') {
            this.setState({
                modal: true
            });
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
            <div id="modal" className={styles.imageSlider}>
                {this.state.modal &&
                    <Modal closeModalHandler={this.closeModalHandler} allImages={this.props.allthumbnails} idx={this.props.index}/>
                }
                <Slider bottomOfWindowPixel={this.props.bottomOfWindowPixel} isThumbnail>
                    <div className={styles.thumbnail} onClick={this.handleClick}>
                        <div className={styles.image} style={backgroundStyle} id={this.props.id}>
                            <div className={styles.overlay}>
                                <span>{this.props.name}</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    };
};

export default Thumbnail;