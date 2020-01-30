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
        2: '365px',
        3: '236px',
        4: '172px'
      }

      const width = isMobile ? '100%' : widthMap[this.props.positions.length];

      return (
        <div
          key={idx}
          className={cn(styles.thumbnail, { [styles.mobileThumbnail]: isMobile })}
          style={{backgroundImage: `url('https://drive.google.com/uc?id=${thumbnail.image}')`, width: width }}
          onClick={() => this.handleClick(idx)}
        >
          {thumbnail.text.length > 0 && !isMobile && <p className={styles.description} style={{ marginTop: `${this.props.height - 15 || 135}px` }} dangerouslySetInnerHTML={{ __html: thumbnail.text }}/>}
        </div>
      );
    });
  }

  render() {
    const { marginBottom = 0 } = this.props;

    return (
      <Fragment >
        {this.state.modal &&
          <Modal closeModalHandler={this.closeModalHandler} allImages={this.props.thumbnails} idx={this.state.clickedIndex} />
        }
        <div className={styles.container} style={{ height: `${isMobile ? 100 : this.props.height}px`, marginBottom: `${isMobile ? 0 : marginBottom}px`}}>
          {this.renderThumbnails()}
        </div>
      </Fragment>
    );
  }
}

export default Thumbnails;
