import React, { Component } from 'react';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import Spinner from '../Spinner/Spinner';
import styles from './BigImage.module.css';

class BigImage extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <div className={cn(styles.container, { [styles.mobileContainer]: isMobile })}>
        {this.state.loading && <Spinner />}
        <img
          src={`https://drive.google.com/uc?id=${this.props.googleId}`}
          alt=""
          style={{opacity: this.state.loading ? 0 : 1}}
          className={styles.image}
          onLoad={() => this.setState({loading: false})}
        />
        {this.props.text && <p className={styles.description}>{this.props.text}</p>}
      </div>
    );
  }
}

export default BigImage;