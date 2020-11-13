import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import MainPage from './components/Pages/MainPage/MainPage';
import GamePage from './components/Pages/GamePage/GamePage';

class App extends Component {
  state = {
    headerScrollPercent: 0,
    bottomOfWindowPixel: document.documentElement.clientHeight
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);
    this.listenToScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.clientHeight;

    const headerScrollPercent = (winScroll / height) * 100;
    const bottomOfWindowPixel = winScroll + height;

    this.setState({
      headerScrollPercent: headerScrollPercent,
      bottomOfWindowPixel: bottomOfWindowPixel
    });
  }


  render() {
    let routes = (
      <Switch>
        <Route path="/" exact render={(props) => <MainPage {...props} {...this.state} />} />

        {/* ------------Game Pages --------------*/}
        <Route path="/games/candy-crush-saga" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/warchild" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/meldkamer-control" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/kenau" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/suez" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/superhelden" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/mediamasters" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/gameassets" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/catch22" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/allnighter" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/lightwatch" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/blokblok" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/rise-of-gods" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/jellyreef" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/vogels" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/noisia" exact render={(props) => <GamePage {...props} />} />
        <Route path="/games/speed-runner" exact render={(props) => <GamePage {...props} />} />

        <Redirect to="/" />
      </Switch>
    );

    return (
      <BrowserRouter>
        <Fragment>
          <Navbar headerScrollPercent={this.state.headerScrollPercent} />
          {routes}
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;