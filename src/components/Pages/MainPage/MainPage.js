import React, { Component, Fragment } from "react";

import Header from './components/Header/Header';
import Main from './components/Main/Main';

class MainPage extends Component {
  state = {
    headerScrollPercent: 0,
    bottomOfWindowPixel: document.documentElement.clientHeight
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.clientHeight;

    const headerScrollPercent = winScroll / height;
    const bottomOfWindowPixel = winScroll + height;

    this.setState({
      headerScrollPercent: headerScrollPercent,
      bottomOfWindowPixel: bottomOfWindowPixel
    });
  }

  render() {
    const { headerScrollPercent, bottomOfWindowPixel } = this.state;
    return (
      <Fragment>
        <Header headerScrollPercent={headerScrollPercent} />
        <Main bottomOfWindowPixel={bottomOfWindowPixel} {...this.props} />
      </Fragment>
    );
  }
}

export default MainPage;
