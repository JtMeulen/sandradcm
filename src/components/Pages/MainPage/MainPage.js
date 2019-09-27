import React, { Component, Fragment } from "react";

import Header from './components/Header/Header';
import Main from './components/Main/Main';

class MainPage extends Component {

  render() {
    const { headerScrollPercent, bottomOfWindowPixel } = this.props;
    return (
      <Fragment>
        <Header headerScrollPercent={headerScrollPercent} />
        <Main bottomOfWindowPixel={bottomOfWindowPixel} {...this.props} />
      </Fragment>
    );
  }
}

export default MainPage;
