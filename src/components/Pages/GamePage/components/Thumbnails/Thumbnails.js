import React, { Component, Fragment } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import Modal from '../../../../Modal/Modal';
import styles from './Thumbnails.module.css';

class Thumbnails extends Component {

  state = {
    modal: false,
    clickedIndex: 0
  }

  closeModalHandler = () => {
    this.setState({
        modal: false
    });
  }

  handleClick = (idx) => {
    this.setState({
      modal: true,
      clickedIndex: idx
    });
  };

  renderThumbnails = () => {
    return this.props.thumbnails.map((thumbnail, idx) => {
      if(!this.props.positions.includes(idx)) {
        return null;
      }

      const widthMap = {
        1: '300px',
        2: '365px',
        3: '236px',
        4: '172px'
      }

      const width = isMobile ? 'auto' : widthMap[this.props.positions.length];
      const whiteBG = thumbnail.options && thumbnail.options === 'whiteBG' || isMobile;

      return (
        <div
          key={idx}
          className={cn(styles.thumbnail, { [styles.whiteBG]: whiteBG })}
          style={{
            backgroundImage: `url('https://drive.google.com/thumbnail?id=${thumbnail.image}&sz=w1200')`,
            width: width,
            height: isMobile ? this.props.height : 'auto',
            backgroundSize: whiteBG ? 'contain' : 'cover'
          }}
          onClick={() => this.handleClick(idx)}
        >
          {thumbnail.text.length > 0 && !isMobile && <p className={styles.description} style={{ marginTop: `${this.props.height - 15 || 135}px` }} dangerouslySetInnerHTML={{ __html: thumbnail.text }}/>}
        </div>
      );
    });
  }

  render() {
    const { marginBottom = 0 } = this.props;
    const containerHeight = isMobile ? 'auto' : `${this.props.height}px`;

    return (
      <Fragment >
        {this.state.modal &&
          <Modal closeModalHandler={this.closeModalHandler} allImages={this.props.thumbnails} idx={this.state.clickedIndex} />
        }
        <div
          className={cn(styles.container, { [styles.mobileContainer]: isMobile })}
          style={{ height: containerHeight, marginBottom: `${isMobile ? 0 : marginBottom}px`}}
        >
          {this.renderThumbnails()}
        </div>
      </Fragment>
    );
  }
}

export default Thumbnails;
