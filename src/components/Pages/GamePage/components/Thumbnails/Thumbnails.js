import React, { Component } from 'react';

import styles from './Thumbnails.module.css';

class Thumbnails extends Component {

  renderThumbnails = () => {
    return this.props.thumbnails.map((thumbnail, idx) => {
      if(!this.props.positions.includes(idx)) {
        return null;
      }

      return (
        <div
          className={styles.thumbnail}
          style={{backgroundImage: `url('https://drive.google.com/uc?id=${thumbnail}')`}}
          onClick={() => console.log('clicked: ', thumbnail, ' idx: ', idx)}
        />
      );
    });
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderThumbnails()}
      </div>
    );
  }
}

export default Thumbnails;
