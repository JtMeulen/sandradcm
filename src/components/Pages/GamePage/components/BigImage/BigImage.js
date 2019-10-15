import React, { Component, Fragment } from 'react';

import Spinner from '../Spinner/Spinner';
import styles from './BigImage.module.css';

class BigImage extends Component {
  state = {
    loading: true
  }
  render() {
    return (
      <Fragment>
        {this.state.loading && <Spinner />}
        <img
          src={`https://drive.google.com/uc?id=${this.props.googleId}`}
          alt=""
          style={{opacity: this.state.loading ? 0 : 1}}
          className={styles.image}
          onLoad={() => this.setState({loading: false})}
        />
      </Fragment>
    );
  }
}

export default BigImage;