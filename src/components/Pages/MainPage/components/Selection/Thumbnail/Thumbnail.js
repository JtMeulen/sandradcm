import React, {Component} from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

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

    getBackgroundPosition = () => {
        if (!this.props.backgroundOffset) {
            return 'center';
        }

        return this.props.backgroundOffset
    }

    render() {
        const backgroundStyle = {
            backgroundImage: `url('https://drive.google.com/thumbnail?id=${this.props.image}&sz=w1200')`,
            backgroundPosition: this.getBackgroundPosition()
        };

        return(
            <div id="modal" className={styles.imageSlider}>
                {this.state.modal &&
                    <Modal closeModalHandler={this.closeModalHandler} allImages={this.props.allthumbnails} idx={this.props.index} mainpage />
                }
                <Slider bottomOfWindowPixel={this.props.bottomOfWindowPixel} isThumbnail>
                    <div className={cn(styles.thumbnail, { [styles.thumbnailMobile]: isMobile })} onClick={this.handleClick}>
                        <div className={styles.image} style={backgroundStyle} id={this.props.id}>
                            <div className={styles.overlay}>
                                <span className={styles.titleText}>{this.props.name}</span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    };
};

export default Thumbnail;