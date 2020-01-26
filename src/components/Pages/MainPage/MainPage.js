import React, { Component, Fragment } from "react";

import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

class MainPage extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto'
      });
    }, 100);
  }

  render() {
    const { headerScrollPercent, bottomOfWindowPixel } = this.props;
    return (
      <Fragment>
        <Header headerScrollPercent={headerScrollPercent} />
        <MainBody bottomOfWindowPixel={bottomOfWindowPixel} {...this.props} />
      </Fragment>
    );
  }
}

export default MainPage;
