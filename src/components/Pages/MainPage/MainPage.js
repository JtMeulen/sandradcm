import React, { Component, Fragment } from "react";

import Header from './components/Header/Header';
import WhatIdo from './components/WhatIdo/WhatIdo';

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <WhatIdo />
      </Fragment>
    );
  }
}

export default MainPage;
